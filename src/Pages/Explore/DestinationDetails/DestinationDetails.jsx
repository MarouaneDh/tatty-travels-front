import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { motion } from 'framer-motion';
import { API, API_HOST } from '../../../configs/api';
import { hideFullscreen, showFullscreen, variants } from '../../../configs/helper';

import { getOneDestination } from '../../../redux/slices/destinations/destinationsAsyncThunk';

import './DestinationDetails.css';

const DestinationDetails = () => {
    const dispatch = useDispatch()
    const { OneDestination, error, isLoading, status } = useSelector((state) => state.destinations.OneDestination)
    const params = useParams()

    const destinationId = params.id

    useEffect(() => {
        if (destinationId) {
            dispatch(getOneDestination(destinationId))
        }
    }, [destinationId])

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="container"
        >
            <section className="destination-details">
                <div
                    className="destination-hero"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${API_HOST + API.images.upload + OneDestination?.mainPicture})`,
                    }}
                >
                    <h2>{OneDestination?.title}</h2>
                </div>
                <div className="destination-content">
                    <p>
                        {OneDestination?.description}
                    </p>
                    <h3>Things to Do:</h3>
                    <ul>
                        {OneDestination?.toDo.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <h3>Best Time to Visit:</h3>
                    <p>
                        {OneDestination?.bestTime}
                    </p>
                    <div className="gallery-grid">
                        {
                            OneDestination?.images.map((image, index) => {
                                return (
                                    <div key={index} className="gallery-item">
                                        <img
                                            src={API_HOST + API.images.upload + image}
                                            alt={`Destination Gallery ${index + 1}`}
                                            onClick={() => showFullscreen(API_HOST + API.images.upload + image)}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <div id="fullscreen-overlay" onClick={hideFullscreen}>
                <img id="fullscreen-image" src="#" alt="Fullscreen Image" />
            </div>
        </motion.div>
    );
};

export default DestinationDetails;