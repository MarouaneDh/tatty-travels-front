import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { variants } from '../../configs/helper';
import { API, API_HOST } from '../../configs/api';

import { getFeaturedDestinations } from '../../redux/slices/destinations/destinationsAsyncThunk';

import HeroBgImage from '../../images/hero-bg.JPG';
import './Home.css';

const App = () => {
    const dispatch = useDispatch()
    const { FeaturedDestinations } = useSelector(state => state.destinations.FeaturedDestinations)

    useEffect(() => {
        dispatch(getFeaturedDestinations())
    }, [])

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <main className="container">
                <section
                    className="hero colorful-hero"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroBgImage})`,
                    }}
                >
                    <div className="hero-content">
                        <h2>Unleash Your Inner Explorer</h2>
                        <p>
                            Dive into a world of vibrant cultures and breathtaking landscapes.
                        </p>
                        <Link to={{ pathname: "/explore" }} className="btn colorful-btn">
                            Discover Now
                        </Link>
                    </div>
                </section>

                <section className="featured-destinations">
                    <h2>Our Top Picks</h2>
                    <div className="destination-grid">
                        {
                            FeaturedDestinations && FeaturedDestinations.map((destination, index) => {
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
                </section>
            </main>
        </motion.div>
    )
}

export default App;