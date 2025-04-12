import Destination4Image from '../../images/destination4.JPG';
import Destination2Image from '../../images/destination2.JPG';
import Destination3Image from '../../images/destination3.JPG';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import './Stories.css';

const TravelStoriesSection = () => {
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
            <section className="travel-stories">
                <h2>Travel Stories</h2>
                <div className="story-grid">
                    <div className="story">
                        <img src={Destination4Image} alt="Travel Story 1" />
                        <h3>A Solo Adventure in Italy</h3>
                        <p>Exploring the hidden gems of Italy on my own...</p>
                        <Link to={{ pathname: `/stories/${1}` }} className="read-story">
                            Read More
                        </Link>
                    </div>
                    <div className="story">
                        <img src={Destination2Image} alt="Travel Story 2" />
                        <h3>The Magic of Southeast Asia</h3>
                        <p>Experiencing the vibrant cultures of Southeast Asia...</p>
                        <Link to={{ pathname: `/stories/${1}` }} className="read-story">
                            Read More
                        </Link>
                    </div>
                    <div className="story">
                        <img src={Destination3Image} alt="Travel Story 3" />
                        <h3>Road Trip Across America</h3>
                        <p>
                            An unforgettable journey across the diverse landscapes of America...
                        </p>
                        <Link to={{ pathname: `/stories/${1}` }} className="read-story">
                            Read More
                        </Link>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default TravelStoriesSection;