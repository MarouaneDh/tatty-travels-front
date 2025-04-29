import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { API, API_HOST } from '../../configs/api';
import { variants } from '../../configs/helper';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { getAllDestinations } from '../../redux/slices/destinations/destinationsAsyncThunk';

import 'react-loading-skeleton/dist/skeleton.css'
import './Explore.css';
import AddEditDestination from './AddEditDestination/AddEditDestination';


const ExploreSection = () => {
    const dispatch = useDispatch();
    const { AllDestinations } = useSelector((state) => state.destinations.AllDestinations);
    const { AddDestination, error, isLoading, status } = useSelector((state) => state.destinations.AddDestination);

    const [show, setShow] = useState(false);

    const token = localStorage.getItem('token');

    useEffect(() => {
        dispatch(getAllDestinations(token));
    }, [])

    console.log(AddDestination)

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="container"
        >
            <section className="explore-destinations">
                <AddEditDestination show={show} setShow={setShow} />
                <h2>Explore Destinations</h2>
                <div className="destination-grid">
                    <div
                        className="destination"
                        onClick={() => setShow(true)}
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))`,
                            cursor: 'pointer'
                        }}
                    >
                        <h3>New destination</h3>
                        <FontAwesomeIcon style={{ width: '40px', height: '40px' }} icon={faPlusSquare} />
                    </div>
                    {
                        AllDestinations && AllDestinations.map((destination, index) => {
                            return (
                                <div
                                    key={destination._id}
                                    className="destination"
                                    style={{
                                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${API_HOST + API.images.upload + destination.mainPicture})`,
                                    }}
                                >
                                    <h3>{destination.title}</h3>
                                    <p>{destination.description}</p>
                                    <Link
                                        to={{ pathname: `/explore/${destination._id}` }}
                                        className="view-destination"
                                    >
                                        View
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                {/* {
                    isLoading && <div className="destination-grid">
                        <SkeletonTheme baseColor="#ffffff" highlightColor="rgba(0, 0, 0, 0.4)">
                            <Skeleton className="destination" />
                            <Skeleton className="destination" />
                            <Skeleton className="destination" />
                        </SkeletonTheme>
                    </div>
                } */}
            </section>
        </motion.div>
    )
}

export default ExploreSection;