import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { motion } from 'framer-motion';
import { API, API_HOST } from '../../../configs/api';
import { hideFullscreen, showFullscreen, variants } from '../../../configs/helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faUpload } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { getOneDestination } from '../../../redux/slices/destinations/destinationsAsyncThunk';
import { deleteOneImage, uploadImage } from '../../../redux/slices/images/imagesAsyncThunk';

import './DestinationDetails.css';

const DestinationDetails = () => {
    const dispatch = useDispatch()
    const { OneDestination, error, isLoading, status } = useSelector((state) => state.destinations.OneDestination)
    const images = useSelector((state) => state.images.deleteOneImage)
    const OneImageUpload = useSelector((state) => state.images.OneImageUpload)
    const params = useParams()

    const destinationId = params.id

    const handleImageUpload = (e) => {
        if (e.target.files.length > 0) {
            const formData = new FormData();
            formData.append('file', e.target.files[0])
            formData.append('imageType', "destination")
            formData.append('assiciationId', params.id)
            formData.append('isMain', false)
            dispatch(uploadImage(formData))
        }
    }

    const handleMainImageUpload = (e) => {
        if (e.target.files.length > 0) {
            const formData = new FormData();
            formData.append('file', e.target.files[0])
            formData.append('imageType', "destination")
            formData.append('assiciationId', params.id)
            formData.append('isMain', true)
            dispatch(uploadImage(formData))
        }
    }

    const handledeleteImage = (imageId) => {
        dispatch(deleteOneImage(imageId))
    }

    useEffect(() => {
        if (destinationId) {
            dispatch(getOneDestination(destinationId))
        }
    }, [destinationId, images.status, OneImageUpload.status])

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="container"
        >
            <section className="destination-details">
                <div
                    className="destination-hero"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${API_HOST + API.images.upload + OneDestination?.mainPicture})`,
                    }}
                >
                    <h2>{OneDestination?.title}</h2>
                </div>
                <div className="destination-content">
                    {
                        <label htmlFor="file-upload" className="custom-file-upload">
                            {
                                isLoading ?
                                    <FontAwesomeIcon icon={faSpinner} spin />
                                    :
                                    <FontAwesomeIcon icon={faUpload} />
                            }
                        </label>
                    }
                    <input id="file-upload" type="file" value="" onChange={handleMainImageUpload} />
                    <p>
                        {OneDestination?.description}
                    </p>
                    <h3>Things to Do:</h3>
                    <ul>
                        {OneDestination?.toDo.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <h3>Best Time to Visit:</h3>
                    <p>
                        {OneDestination?.bestTime}
                    </p>
                    <div className="gallery-grid">
                        <label htmlFor="file-upload" className="gallery-item" style={{
                            background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))`, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'
                        }}>
                            {
                                isLoading ?
                                    <FontAwesomeIcon icon={faSpinner} spin />
                                    :
                                    <FontAwesomeIcon icon={faUpload} />
                            }
                        </label>
                        <input id="file-upload" type="file" value="" onChange={handleImageUpload} />
                        {
                            OneDestination?.images.map((image, index) => {
                                return (
                                    <div key={index} className="gallery-item">
                                        {
                                            images.isLoading ? <FontAwesomeIcon key={index} className='loading_delete_icon' icon={faSpinner} spin /> :
                                                <FontAwesomeIcon key={index} onClick={() => handledeleteImage(image)} className='delete_icon' icon={faClose} />
                                        }
                                        <img
                                            src={API_HOST + API.images.upload + image}
                                            alt={`Destination Gallery ${index + 1}`}
                                            onClick={() => showFullscreen(API_HOST + API.images.upload + image)}
                                        />
                                    </div>
                                )
                            })
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

export default DestinationDetails;