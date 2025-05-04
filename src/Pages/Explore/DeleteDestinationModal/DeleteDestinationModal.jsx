import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deleteDestination } from '../../../redux/slices/destinations/destinationsAsyncThunk';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteDestinationModal = ({ navigate, showDelete, setShowDelete, destinationToDelete, setDestinationToDelete }) => {
    const dispatch = useDispatch()
    const navigation = useNavigate()

    const CloseDelete = () => {
        setShowDelete(false);
        setDestinationToDelete("");
    }

    const handleDeleteDestination = () => {
        dispatch(deleteDestination(destinationToDelete))
        setShowDelete(false);
        setDestinationToDelete("");
        if (navigate) {
            navigation("/explore");
        }
    }

    return (
        <Modal show={showDelete} onHide={CloseDelete} centered>
            <Modal.Header closeButton>
                <Modal.Title style={{ color: 'red' }}>Deleting destination !!</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal_body' style={{ textAlign: 'center', color: 'red' }}>
                Are you sure you want to delete this destination? This action cannot be undone, and all data related to this destination will be permanently removed from the database. Please confirm that you want to proceed with this action.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleDeleteDestination}>
                    Delete
                </Button>
                <Button variant="secondary" onClick={CloseDelete}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteDestinationModal