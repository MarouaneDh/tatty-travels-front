import Destination2Image from '../../../images/destination2.JPG';
import Destination3Image from '../../../images/destination3.JPG';
import Destination4Image from '../../../images/destination4.JPG';
import Destination5Image from '../../../images/destination5.JPG';

import { motion } from 'framer-motion';

import './DestinationDetails.css';

const DestinationDetails = () => {
    const showFullscreen = (imageSrc) => {
        const fullscreenImage = document.getElementById('fullscreen-image');
        const fullscreenOverlay = document.getElementById('fullscreen-overlay');
        if (fullscreenImage && fullscreenOverlay) {
            fullscreenImage.src = imageSrc;
            fullscreenOverlay.style.display = 'flex';
        }
    };

    const hideFullscreen = () => {
        const fullscreenOverlay = document.getElementById('fullscreen-overlay');
        if (fullscreenOverlay) {
            fullscreenOverlay.style.display = 'none';
        }
    };

    return (
        <motion.div
            // initial={{ width: 0 }}
            // animate={{ width: "100%", transition: { duration: 0.1 } }}
            // exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
            className="container"
        >
            <section className="destination-details">
                <div
                    className="destination-hero"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Destination2Image})`,
                    }}
                >
                    <h2>Santorini Sunsets</h2>
                </div>
                <div className="destination-content">
                    <p>
                        Santorini, Greece, is a breathtaking island known for its stunning
                        sunsets, whitewashed buildings, and dramatic cliffs overlooking the
                        Aegean Sea. This destination offers a unique blend of natural
                        beauty, rich history, and vibrant culture.
                    </p>
                    <h3>Things to Do:</h3>
                    <ul>
                        <li>Watch the sunset from Oia.</li>
                        <li>Explore the ancient ruins of Akrotiri.</li>
                        <li>Relax on the black sand beaches.</li>
                        <li>Take a boat tour to the volcanic islands.</li>
                        <li>Sample local wines at a vineyard.</li>
                    </ul>
                    <h3>Best Time to Visit:</h3>
                    <p>
                        The best time to visit Santorini is during the shoulder seasons
                        (April-May and September-October) when the weather is pleasant, and
                        the crowds are smaller.
                    </p>
                    <div className="gallery-grid">
                        <img
                            src={Destination3Image}
                            alt="Santorini 1"
                            className="gallery-image"
                            onClick={() => showFullscreen(Destination3Image)}
                        />
                        <img
                            src={Destination4Image}
                            alt="Santorini 2"
                            className="gallery-image"
                            onClick={() => showFullscreen(Destination4Image)}
                        />
                        <img
                            src={Destination5Image}
                            alt="Santorini 3"
                            className="gallery-image"
                            onClick={() => showFullscreen(Destination5Image)}
                        />
                    </div>
                </div>
            </section>
            <div id="fullscreen-overlay" onClick={hideFullscreen}>
                <img id="fullscreen-image" src="" alt="Fullscreen Image" />
            </div>
        </motion.div>
    );
};

export default DestinationDetails;