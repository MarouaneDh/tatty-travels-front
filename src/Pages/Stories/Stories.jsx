import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { getAllStories } from '../../redux/slices/stories/storiesAsyncThunk';
import { API, API_HOST } from '../../configs/api';
import { truncateText, variants } from '../../configs/helper';

import './Stories.css';

const TravelStoriesSection = () => {
    const dispatch = useDispatch()
    const { AllStories, error, isLoading, status } = useSelector((state) => state.stories.AllStories);

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