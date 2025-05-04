import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { motion } from 'framer-motion';
import { API, API_HOST } from '../../../configs/api';
import { hideFullscreen, showFullscreen, variants } from '../../../configs/helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faUpload, faSpinner, faEdit, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

import { editDestination, getOneDestination } from '../../../redux/slices/destinations/destinationsAsyncThunk';
import { deleteOneImage, uploadImage } from '../../../redux/slices/images/imagesAsyncThunk';

import './DestinationDetails.css';
import DeleteDestinationModal from '../DeleteDestinationModal/DeleteDestinationModal';

const DestinationDetails = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const images = useSelector((state) => state.images.deleteOneImage)
    const OneImageUpload = useSelector((state) => state.images.OneImageUpload)
    const OneDestination = useSelector((state) => state.destinations.OneDestination.OneDestination)
    const EditDestination = useSelector((state) => state.destinations.EditDestination)
    const DeleteDestination = useSelector((state) => state.destinations.DeleteDestination);

    const [isEdit, setIsEdit] = useState(false)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [todo, setTodo] = useState([])
    const [bestTime, setBestTime] = useState('')
    const [featured, setFeatured] = useState(false)
    const [isLive, setIsLive] = useState(false)
    const [showDelete, setShowDelete] = useState(false);
    const [destinationToDelete, setDestinationToDelete] = useState("");

    const destinationId = params.id
    const token = localStorage.getItem('token')

    const toggleEdit = () => {
        setIsEdit(!isEdit)
    }

    const handleImageUpload = (e) => {
        if (e.target.files.length > 0) {
            const formData = new FormData();
            formData.append('file', e.target.files[0])
            formData.append('imageType', "destination")
            formData.append('assiciationId', params.id)
            formData.append('isMain', 'false')
            dispatch(uploadImage(formData))
        }
    }

    const handleMainImageUpload = (e) => {
        if (e.target.files.length > 0) {
            const formData = new FormData();
            formData.append('file', e.target.files[0])
            formData.append('imageType', "destination")
            formData.append('assiciationId', params.id)
            formData.append('isMain', 'true')
            dispatch(uploadImage(formData))
        }
    }

    const handledeleteImage = (imageId) => {
        dispatch(deleteOneImage(imageId))
    }

    const handleToDoChange = (e, index) => {
        const newTodo = [...todo]
        newTodo[index] = e.target.value
        setTodo(newTodo)
    }

    const handleDeleteToDo = (index) => {
        const newTodo = [...todo]
        newTodo.splice(index, 1)
        setTodo(newTodo)
    }

    const handleEditDestination = () => {
        dispatch(editDestination({
            data: {
                title,
                description,
                toDo: todo,
                bestTime,
                featured,
                isLive
            },
            id: destinationId
        }))
    }

    const handleDeleteClick = (id) => {
        setShowDelete(true);
        setDestinationToDelete(id);
    }

    useEffect(() => {
        if (destinationId) {
            dispatch(getOneDestination(destinationId))
        }
    }, [destinationId, images.status, OneImageUpload.status])

    useEffect(() => {
        if (OneDestination) {
            setDescription(OneDestination.description)
            setTitle(OneDestination.title)
            setTodo(OneDestination.toDo)
            setBestTime(OneDestination.bestTime)
            setFeatured(OneDestination.featured)
            setIsLive(OneDestination.isLive)
        }
    }, [OneDestination])

    useEffect(() => {
        if (EditDestination.status === 'fulfilled') {
            setIsEdit(false)
            dispatch(getOneDestination(destinationId))
        }
    }, [EditDestination.status])

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="container"
        >
            <DeleteDestinationModal navigate={true} showDelete={showDelete} setShowDelete={setShowDelete} destinationToDelete={destinationToDelete} setDestinationToDelete={setDestinationToDelete} />
            <section className="destination-details">
                <div
                    className="destination-hero"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${API_HOST + API.images.upload + OneDestination?.mainPicture})`,
                    }}
                >
                    {
                        !isEdit ?
                            <h2>{OneDestination?.title}</h2> :
                            <div>
                                <label>Title</label>
                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                    }
                </div>
                <div className="destination-content">
                    {
                        !isEdit && token && <label style={{ left: '18px' }} htmlFor="main-file-upload" className="custom-file-upload">
                            {
                                OneImageUpload.isLoading ?
                                    <FontAwesomeIcon icon={faSpinner} spin />
                                    :
                                    <FontAwesomeIcon icon={faUpload} />
                            }
                        </label>
                    }
                    {
                        !isEdit && token && <FontAwesomeIcon onClick={toggleEdit} className="edit-button" icon={faEdit} />
                    }
                    {
                        token && (DeleteDestination.isLoading ? <div className='delete-destination-details'><FontAwesomeIcon icon={faSpinner} spin /></div> :
                            <FontAwesomeIcon onClick={() => handleDeleteClick(destinationId)} className='delete-destination-details' icon={faTrashCan} />)
                    }
                    <input id="main-file-upload" type="file" value="" onChange={handleMainImageUpload} />
                    {
                        isEdit && <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div onChange={(e) => setFeatured(e.target.checked)} className="form-check form-switch">
                                <input className="form-check-input" defaultChecked={featured} type="checkbox" role="switch" id="featured" />
                                <label className="form-check-label" htmlFor="featured">Featured</label>
                            </div>
                            <div onChange={(e) => setIsLive(e.target.checked)} className="form-check form-switch">
                                <input className="form-check-input" defaultChecked={isLive} type="checkbox" role="switch" id="isLive" />
                                <label className="form-check-label" htmlFor="isLive">Live</label>
                            </div>
                        </div>
                    }
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {
                            !isEdit ?
                                <p style={{ margin: '0' }}>
                                    {OneDestination?.description}
                                </p> :
                                <div style={{ width: '100%' }}>
                                    <label>Description</label>
                                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} />
                                </div>
                        }
                    </div>
                    <h3>Things to Do:</h3>
                    {
                        !isEdit ? <ul>
                            {OneDestination?.toDo.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul> :
                            <div>
                                {todo?.map((item, index) => (
                                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                        <input type="text" style={{ margin: '0 10px 0 0' }} value={item} onChange={(e) => handleToDoChange(e, index)} />
                                        <Button style={{ height: '49px' }} variant="danger" onClick={() => handleDeleteToDo(index)}>
                                            Delete
                                        </Button>
                                    </div>
                                ))}
                                <Button style={{ color: 'black', backgroundColor: '#C7D9DD', border: 'none', height: 48 }} onClick={() => {
                                    setTodo([...todo, ''])
                                }}>
                                    <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faPlus} />
                                    Add
                                </Button>
                            </div>
                    }
                    <h3>Best Time to Visit:</h3>
                    {
                        !isEdit ?
                            <p style={{ margin: '0' }}>
                                {OneDestination?.bestTime}
                            </p> :
                            <div style={{ width: '100%' }}>
                                <label>Best Time</label>
                                <input type="text" value={bestTime} onChange={(e) => setBestTime(e.target.value)} />
                            </div>
                    }
                    <hr />
                    {
                        isEdit && <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Button style={{ color: 'black', backgroundColor: '#C7D9DD', border: 'none', height: 48 }} onClick={handleEditDestination}>
                                {
                                    EditDestination.isLoading ?
                                        <FontAwesomeIcon icon={faSpinner} spin />
                                        : <span>Save changes</span>
                                }
                            </Button>
                            <Button style={{ height: 48 }} variant="secondary" onClick={toggleEdit}>
                                Close
                            </Button>
                        </div>
                    }
                    {!isEdit && <div className="gallery-grid">
                        {
                            token && <label htmlFor="file-upload" className="gallery-item" style={{
                                background: `#C7D9DD`, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', minHeight: "150px", borderRadius: '10px'
                            }}>
                                {
                                    OneImageUpload.isLoading ?
                                        <FontAwesomeIcon style={{ width: '50px', height: '50px' }} icon={faSpinner} spin />
                                        :
                                        <FontAwesomeIcon style={{ width: '50px', height: '50px' }} icon={faUpload} />
                                }
                            </label>
                        }
                        <input id="file-upload" type="file" value="" onChange={handleImageUpload} />
                        {
                            OneDestination?.images.map((image, index) => {
                                return (
                                    <div key={index} className="gallery-item">
                                        {
                                            images.isLoading ? token && <FontAwesomeIcon key={index} className='loading_delete_icon' icon={faSpinner} spin /> :
                                                token && <FontAwesomeIcon key={index} onClick={() => handledeleteImage(image)} className='delete_icon' icon={faClose} />
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
                    </div>}
                </div>
            </section>
            <div id="fullscreen-overlay" onClick={hideFullscreen}>
                <img id="fullscreen-image" src="#" alt="Fullscreen Image" />
            </div>
        </motion.div>
    );
};

export default DestinationDetails;