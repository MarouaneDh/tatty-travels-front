import ParisImage from '../../images/paris.JPG';
import Destination2Image from '../../images/destination2.JPG';
import Destination3Image from '../../images/destination3.JPG';
import Destination4Image from '../../images/destination4.JPG';
import Destination5Image from '../../images/destination5.JPG';
import Destination6Image from '../../images/destination6.JPG';

import { motion } from 'framer-motion';


import './Gallery.css';

const Gallery = () => {
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

    const variants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
        exit: { opacity: 0, y: 20, transition: { duration: 0.2, ease: 'easeInOut' } },
    };

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="container"
        >
            <section className="photo-gallery">
                <h2>Photo Gallery</h2>
                <div className="gallery-grid">
                    <img
                        src={ParisImage}
                        alt="Gallery 1"
                        className="gallery-image"
                        onClick={() => showFullscreen(ParisImage)}
                    />
                    <img
                        src={Destination2Image}
                        alt="Gallery 2"
                        className="gallery-image"
                        onClick={() => showFullscreen(Destination2Image)}
                    />
                    <img
                        src={Destination3Image}
                        alt="Gallery 3"
                        className="gallery-image"
                        onClick={() => showFullscreen(Destination3Image)}
                    />
                    <img
                        src={Destination4Image}
                        alt="Gallery 4"
                        className="gallery-image"
                        onClick={() => showFullscreen(Destination4Image)}
                    />
                    <img
                        src={Destination5Image}
                        alt="Gallery 5"
                        className="gallery-image"
                        onClick={() => showFullscreen(Destination5Image)}
                    />
                    <img
                        src={Destination6Image}
                        alt="Gallery 6"
                        className="gallery-image"
                        onClick={() => showFullscreen(Destination6Image)}
                    />
                </div>
            </section>
            <div id="fullscreen-overlay" onClick={hideFullscreen}>
                <img id="fullscreen-image" src="#" alt="Fullscreen Image" />
            </div>
        </motion.div>
    );
};

export default Gallery;