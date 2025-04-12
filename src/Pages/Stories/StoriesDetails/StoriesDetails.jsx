import ParisImage from '../../../images/paris.JPG';
import Destination4Image from '../../../images/destination4.JPG';
import Destination5Image from '../../../images/destination5.JPG';
import Destination6Image from '../../../images/destination6.JPG';

import { motion } from 'framer-motion';

import './StoriesDetails.css';

const StoryDetails = () => {
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
            <section className="story-details">
                <div className="story-hero">
                    <img src={ParisImage} alt="A Solo Adventure in Italy" />
                    <h2>A Solo Adventure in Italy</h2>
                </div>
                <div className="story-content">
                    <p>
                        My journey to Italy began with a spontaneous decision. I had always
                        dreamed of exploring the historic cities and picturesque
                        countryside, but never found the right time or company. So, I
                        decided to go solo.
                    </p>
                    <p>
                        I started in Rome, where I spent days wandering through ancient
                        ruins, marveling at the Colosseum, and tossing a coin into the Trevi
                        Fountain. The city was a whirlwind of history and culture, and I was
                        completely captivated.
                    </p>
                    <p>
                        From Rome, I took a train to Florence, the birthplace of the
                        Renaissance. I explored the Uffizi Gallery, climbed to the top of
                        the Duomo, and crossed the Ponte Vecchio. The city was a feast for
                        the eyes, with its stunning architecture and art.
                    </p>
                    <p>
                        Next, I ventured into the Tuscan countryside, where I rented a car
                        and drove through rolling hills and vineyards. I visited charming
                        medieval towns, sampled local wines, and indulged in delicious
                        Italian cuisine.
                    </p>
                    <p>
                        The entire experience was transformative. I learned to rely on
                        myself, to navigate unfamiliar places, and to embrace the
                        unexpected. I discovered a newfound sense of independence and
                        confidence.
                    </p>
                    <p>
                        Italy taught me that solo travel is not just about seeing new
                        places, but also about discovering yourself. It was an adventure I
                        will never forget.
                    </p>
                    <div className="gallery-grid">
                        <img
                            src={Destination4Image}
                            alt="Italy 1"
                            className="gallery-image"
                            onClick={() => showFullscreen(Destination4Image)}
                        />
                        <img
                            src={Destination5Image}
                            alt="Italy 2"
                            className="gallery-image"
                            onClick={() => showFullscreen(Destination5Image)}
                        />
                        <img
                            src={Destination6Image}
                            alt="Italy 3"
                            className="gallery-image"
                            onClick={() => showFullscreen(Destination6Image)}
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

export default StoryDetails;