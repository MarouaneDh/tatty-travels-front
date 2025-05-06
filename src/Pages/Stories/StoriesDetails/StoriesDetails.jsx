import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { motion } from 'framer-motion';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getOneStory } from '../../../redux/slices/stories/storiesAsyncThunk';
import { API, API_HOST } from '../../../configs/api';
import { hideFullscreen, showFullscreen, variants } from '../../../configs/helper';
import DeleteStoryModal from '../DeleteStoryModal/DeleteStoryModal';

import './StoriesDetails.css';

const StoryDetails = () => {
    const params = useParams()
    const dispatch = useDispatch();
    const OneStory = useSelector((state) => state.stories.OneStory.OneStory);

    const storyId = params.id;

    const [showDelete, setShowDelete] = useState(false);
    const [storyToDelete, setStoryToDelete] = useState("");

    const token = localStorage.getItem('token');

    const handleDeleteClick = (id) => {
        setShowDelete(true);
        setStoryToDelete(id);
    }

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
                <DeleteStoryModal navigate={true} showDelete={showDelete} setShowDelete={setShowDelete} storyToDelete={storyToDelete} setStoryToDelete={setStoryToDelete} />
                <div className="story-hero">
                    {token && <FontAwesomeIcon onClick={() => handleDeleteClick(storyId)} className='delete-story' icon={faTrashCan} />}
                    {OneStory?.mainPicture && <img src={API_HOST + API.images.upload + OneStory?.mainPicture} alt={OneStory?.title} />}
                    <h2>{OneStory?.title}</h2>
                </div>
                <div className="story-content">
                    <p>{OneStory?.content}</p>
                    <div className="gallery-grid">
                        {
                            OneStory?.images && OneStory.images.map((image, index) => (
                                <img
                                    key={index}
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