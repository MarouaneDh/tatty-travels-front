import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { motion } from 'framer-motion';

import { getOneStory } from '../../../redux/slices/stories/storiesAsyncThunk';
import { API, API_HOST } from '../../../configs/api';
import { hideFullscreen, showFullscreen, variants } from '../../../configs/helper';

import './StoriesDetails.css';

const StoryDetails = () => {
    const params = useParams()
    const dispatch = useDispatch();
    const { OneStory, error, isLoading, status } = useSelector((state) => state.stories.OneStory);

    const storyId = params.id;

    useEffect(() => {
        if (storyId) {
            dispatch(getOneStory(storyId));
        }
    }, [storyId])

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
                    <img src={API_HOST + API.images.upload + OneStory?.mainPicture} alt={OneStory?.title} />
                    <h2>{OneStory?.title}</h2>
                </div>
                <div className="story-content">
                    <p>{OneStory?.content}</p>
                    <div className="gallery-grid">
                        {
                            OneStory?.images && OneStory.images.map((image, index) => (
                                <img
                                    key={image}
                                    src={API_HOST + API.images.upload + image}
                                    alt="Italy 1"
                                    className="gallery-image"
                                    onClick={() => showFullscreen(API_HOST + API.images.upload + image)}
                                />
                            ))
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

export default StoryDetails;