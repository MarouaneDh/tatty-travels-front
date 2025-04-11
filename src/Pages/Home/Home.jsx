import ParisImage from '../../images/paris.JPG';
import MachuPicchuImage from '../../images/destination2.JPG';
import KyotoImage from '../../images/destination3.JPG';
import SafariImage from '../../images/destination4.JPG';
import NorthernLightsImage from '../../images/destination5.JPG';
import ReefImage from '../../images/destination6.JPG';
import HeroBgImage from '../../images/hero-bg.JPG';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './Home.css';

const App = () => (
    <motion.div
    // initial={{ width: 0 }}
    // animate={{ width: "100%", transition: { duration: 0.1 } }}
    // exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
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
                    <div
                        className="destination"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${ParisImage})`,
                        }}
                    >
                        <h3>France</h3>
                        <p>Experience the magic of the Paris.</p>
                        <a href="/explore/france" className="view-destination">
                            View
                        </a>
                    </div>
                    <div
                        className="destination"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${MachuPicchuImage})`,
                        }}
                    >
                        <h3>Machu Picchu Trails</h3>
                        <p>Journey to the heart of the Andes.</p>
                        <a href="/explore/machu-picchu" className="view-destination">
                            View
                        </a>
                    </div>
                    <div
                        className="destination"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${KyotoImage})`,
                        }}
                    >
                        <h3>Kyoto Gardens</h3>
                        <p>Find tranquility in ancient Japan.</p>
                        <a href="/explore/kyoto" className="view-destination">
                            View
                        </a>
                    </div>
                    <div
                        className="destination"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${SafariImage})`,
                        }}
                    >
                        <h3>African Safari</h3>
                        <p>Witness the wild wonders of Africa.</p>
                        <a href="/explore/african-safari" className="view-destination">
                            View
                        </a>
                    </div>
                    <div
                        className="destination"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${NorthernLightsImage})`,
                        }}
                    >
                        <h3>Northern Lights</h3>
                        <p>Experience the Aurora Borealis.</p>
                        <a href="/explore/northern-lights" className="view-destination">
                            View
                        </a>
                    </div>
                    <div
                        className="destination"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${ReefImage})`,
                        }}
                    >
                        <h3>Great Barrier Reef</h3>
                        <p>Explore the underwater paradise.</p>
                        <a href="/explore/great-barrier-reef" className="view-destination">
                            View
                        </a>
                    </div>
                </div>
            </section>
        </main>
    </motion.div>
);

export default App;