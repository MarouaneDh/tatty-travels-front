import ParisImage from '../../images/paris.JPG';
import Destination2Image from '../../images/destination2.JPG';
import Destination3Image from '../../images/destination3.JPG';
import Destination4Image from '../../images/destination4.JPG';
import Destination5Image from '../../images/destination5.JPG';
import Destination6Image from '../../images/destination6.JPG';

import { motion } from 'framer-motion';

import './Explore.css';
import { Link } from 'react-router-dom';

const ExploreSection = () => (
    <motion.div
        // initial={{ width: 0 }}
        // animate={{ width: "100%", transition: { duration: 0.1 } }}
        // exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        className="container"
    >
        <section className="explore-destinations">
            <h2>Explore Destinations</h2>
            <div className="destination-grid">
                <div
                    className="destination"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${ParisImage})`,
                    }}
                >
                    <h3>France</h3>
                    <p>Experience the magic of the Paris.</p>
                    <Link
                        to={{ pathname: `/explore/${1}` }}
                        className="view-destination"
                    >
                        View
                    </Link>
                </div>
                <div
                    className="destination"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Destination2Image})`,
                    }}
                >
                    <h3>Machu Picchu Trails</h3>
                    <p>Journey to the heart of the Andes.</p>
                    <Link
                        to={{ pathname: `/explore/${1}` }}
                        className="view-destination"
                    >
                        View
                    </Link>
                </div>
                <div
                    className="destination"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Destination3Image})`,
                    }}
                >
                    <h3>Kyoto Gardens</h3>
                    <p>Find tranquility in ancient Japan.</p>
                    <Link
                        to={{ pathname: `/explore/${1}` }}
                        className="view-destination"
                    >
                        View
                    </Link>
                </div>
                <div
                    className="destination"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Destination4Image})`,
                    }}
                >
                    <h3>African Safari</h3>
                    <p>Witness the wild wonders of Africa.</p>
                    <Link
                        to={{ pathname: `/explore/${1}` }}
                        className="view-destination"
                    >
                        View
                    </Link>
                </div>
                <div
                    className="destination"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Destination5Image})`,
                    }}
                >
                    <h3>Northern Lights</h3>
                    <p>Experience the Aurora Borealis.</p>
                    <Link
                        to={{ pathname: `/explore/${1}` }}
                        className="view-destination"
                    >
                        View
                    </Link>
                </div>
                <div
                    className="destination"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Destination6Image})`,
                    }}
                >
                    <h3>Great Barrier Reef</h3>
                    <p>Explore the underwater paradise.</p>
                    <Link
                        to={{ pathname: `/explore/${1}` }}
                        className="view-destination"
                    >
                        View
                    </Link>
                </div>
            </div>
        </section>
    </motion.div>
);

export default ExploreSection;