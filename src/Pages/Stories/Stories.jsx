import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { getAllStories } from '../../redux/slices/stories/storiesAsyncThunk';
import { API, API_HOST } from '../../configs/api';
import { truncateText, variants } from '../../configs/helper';
import { faSpinner, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DeleteStoryModal from './DeleteStoryModal/DeleteStoryModal';

import './Stories.css';

const TravelStoriesSection = () => {
    const dispatch = useDispatch()
    const AllStories = useSelector((state) => state.stories.AllStories.AllStories);
    const DeleteOneStory = useSelector((state) => state.stories.DeleteOneStory);

    const [showDelete, setShowDelete] = useState(false);
    const [storyToDelete, setStoryToDelete] = useState("");

    const token = localStorage.getItem('token');

    const handleDeleteClick = (id) => {
        setShowDelete(true);
        setStoryToDelete(id);
    }

    useEffect(() => {
        dispatch(getAllStories(token));
    }, [])

    useEffect(() => {
        if (DeleteOneStory.status === 'fulfilled') {
            dispatch(getAllStories(token));
        }
    }, [DeleteOneStory.status])

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="container"
        >
            <section className="travel-stories">
                <DeleteStoryModal navigate={false} showDelete={showDelete} setShowDelete={setShowDelete} storyToDelete={storyToDelete} setStoryToDelete={setStoryToDelete} />
                <h2>Travel Stories</h2>
                <div className="story-grid">
                    {
                        AllStories && AllStories.map((story) => (
                            <div key={story._id} className="story">
                                {
                                    token && (DeleteOneStory.isLoading ? <div className='delete-story'><FontAwesomeIcon icon={faSpinner} spin /></div> :
                                        <FontAwesomeIcon onClick={() => handleDeleteClick(story._id)} className='delete-story' icon={faTrashCan} />)
                                }
                                <div style={{
                                    backgroundImage: `${story.mainPicture ? '' : 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))'}`,
                                    cursor: 'pointer',
                                    height: '200px',
                                }}>
                                    {story.mainPicture && <img src={API_HOST + API.images.upload + story.mainPicture} alt="Travel Story 1" />}
                                </div>
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