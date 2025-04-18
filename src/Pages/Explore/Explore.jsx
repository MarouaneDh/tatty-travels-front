import ParisImage from '../../images/paris.JPG';
import Destination2Image from '../../images/destination2.JPG';
import Destination3Image from '../../images/destination3.JPG';
import Destination4Image from '../../images/destination4.JPG';
import Destination5Image from '../../images/destination5.JPG';
import Destination6Image from '../../images/destination6.JPG';

import { motion } from 'framer-motion';

import './Explore.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllDestinations } from '../../redux/slices/destinations/destinationsAsyncThunk';
import { API, API_HOST } from '../../configs/api';

const ExploreSection = () => {
    const dispatch = useDispatch();
    const { AllDestinations, error, isLoading, status } = useSelector((state) => state.destinations.AllDestinations);

    const variants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
        exit: { opacity: 0, y: 20, transition: { duration: 0.2, ease: 'easeInOut' } },
    };

    useEffect(() => {
        dispatch(getAllDestinations());
    }, [])

    console.log(AllDestinations)

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
                                    key={index}
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
            </section>
        </motion.div>
    )
}

export default ExploreSection;