import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { API, API_HOST } from '../../configs/api';
import { variants } from '../../configs/helper';
import AddEditDestination from './AddEditDestination/AddDestination';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faSpinner, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { getAllDestinations } from '../../redux/slices/destinations/destinationsAsyncThunk';

import 'react-loading-skeleton/dist/skeleton.css'
import './Explore.css';
import DeleteDestinationModal from './DeleteDestinationModal/DeleteDestinationModal';


const ExploreSection = () => {
    const dispatch = useDispatch();
    const { AllDestinations } = useSelector((state) => state.destinations.AllDestinations);
    const { isLoading, status } = useSelector((state) => state.destinations.AddDestination);
    const DeleteDestination = useSelector((state) => state.destinations.DeleteDestination);

    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [destinationToDelete, setDestinationToDelete] = useState("");

    const token = localStorage.getItem('token');

    const handleDeleteClick = (id) => {
        setShowDelete(true);
        setDestinationToDelete(id);
    }

    useEffect(() => {
        dispatch(getAllDestinations(token));
    }, [])

    useEffect(() => {
        if (status === 'fulfilled' || DeleteDestination.status === 'fulfilled') {
            dispatch(getAllDestinations(token));
        }
    }, [status, DeleteDestination.status])

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="container"
        >
            <section className="explore-destinations">
                <AddEditDestination show={show} setShow={setShow} />
                <DeleteDestinationModal navigate={false} showDelete={showDelete} setShowDelete={setShowDelete} destinationToDelete={destinationToDelete} setDestinationToDelete={setDestinationToDelete} />
                <h2>Explore Destinations</h2>
                <div className="destination-grid">
                    {
                        token && <div
                            className="destination"
                            onClick={() => setShow(true)}
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))`,
                                cursor: 'pointer'
                            }}
                        >
                            <h3>New destination</h3>
                            {
                                isLoading ? <FontAwesomeIcon className='icons' icon={faSpinner} spin /> :
                                    <FontAwesomeIcon className='icons' icon={faPlusSquare} />
                            }
                        </div>
                    }
                    {
                        AllDestinations && AllDestinations.map((destination, index) => {
                            return (
                                <div
                                    key={destination._id}
                                    className="destination"
                                    style={{
                                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${API_HOST + API.images.upload + destination.mainPicture})`,
                                    }}
                                >
                                    {
                                        token && (DeleteDestination.isLoading ? <div className='delete-destination'><FontAwesomeIcon icon={faSpinner} spin /></div> :
                                            <FontAwesomeIcon onClick={() => handleDeleteClick(destination._id)} className='delete-destination' icon={faTrashCan} />)
                                    }
                                    <h3>{destination.title}</h3>
                                    <p>{destination.description}</p>
                                    <Link
                                        to={{ pathname: `/explore/${destination._id}` }}
                                        className="view-destination"
                                    >
                                        View
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </motion.div>
    )
}

export default ExploreSection;