import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { getAllStories } from '../../redux/slices/stories/storiesAsyncThunk';
import { API, API_HOST } from '../../configs/api';

import './Stories.css';

const TravelStoriesSection = () => {
    const dispatch = useDispatch()
    const { AllStories, error, isLoading, status } = useSelector((state) => state.stories.AllStories);

    const variants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
        exit: { opacity: 0, y: 20, transition: { duration: 0.2, ease: 'easeInOut' } },
    };

    const truncateText = (text) => {
        return text.substring(0, 20) + "..."
    };

    useEffect(() => {
        dispatch(getAllStories());
    }, [])

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
                    {
                        AllStories && AllStories.map((story) => (
                            <div key={story._id} className="story">
                                <img src={API_HOST + API.images.upload + story.mainPicture} alt="Travel Story 1" />
                                <h3>{story.title}</h3>
                                <p>{truncateText(story.content)}</p>
                                <Link to={{ pathname: `/stories/${story._id}` }} className="read-story">
                                    Read More
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </section>
        </motion.div>
    )
}

export default TravelStoriesSection;