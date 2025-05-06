import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deleteOneStory } from '../../../redux/slices/stories/storiesAsyncThunk';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteStoryModal = ({ navigate, showDelete, setShowDelete, storyToDelete, setStoryToDelete }) => {
    const dispatch = useDispatch()
    const navigation = useNavigate()

    const CloseDelete = () => {
        setShowDelete(false);
        setStoryToDelete("");
    }

    const handleDeleteStory = () => {
        dispatch(deleteOneStory(storyToDelete))
        setShowDelete(false);
        setStoryToDelete("");
        if (navigate) {
            navigation("/explore");
        }
    }

    return (
        <Modal show={showDelete} onHide={CloseDelete} centered>
            <Modal.Header closeButton>
                <Modal.Title style={{ color: 'red' }}>Deleting story !!</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal_body' style={{ textAlign: 'center', color: 'red' }}>
                Are you sure you want to delete this story? This action cannot be undone, and all data related to this story will be permanently removed from the database. Please confirm that you want to proceed with this action.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleDeleteStory}>
                    Delete
                </Button>
                <Button variant="secondary" onClick={CloseDelete}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteStoryModal