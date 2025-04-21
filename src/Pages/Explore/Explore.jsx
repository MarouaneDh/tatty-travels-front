import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { API, API_HOST } from '../../configs/api';
import { variants } from '../../configs/helper';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import { getAllDestinations } from '../../redux/slices/destinations/destinationsAsyncThunk';

import 'react-loading-skeleton/dist/skeleton.css'
import './Explore.css';

const ExploreSection = () => {
    const dispatch = useDispatch();
    const { AllDestinations, error, isLoading, status } = useSelector((state) => state.destinations.AllDestinations);

    useEffect(() => {
        dispatch(getAllDestinations());
    }, [])

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="container"
        >
            <section className="explore-destinations">
                <h2>Explore Destinations</h2>
                <div className="destination-grid">
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
                {
                    isLoading && <div className="destination-grid">
                        <SkeletonTheme baseColor="#ffffff" highlightColor="rgba(0, 0, 0, 0.4)">
                            <Skeleton className="destination" />
                            <Skeleton className="destination" />
                            <Skeleton className="destination" />
                        </SkeletonTheme>
                    </div>
                }
            </section>
        </motion.div>
    )
}

export default ExploreSection;