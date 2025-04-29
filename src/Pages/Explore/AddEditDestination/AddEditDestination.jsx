import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addDestination } from '../../../redux/slices/destinations/destinationsAsyncThunk';

const AddEditDestination = ({ show, setShow }) => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [description, setDescription] = useState('')
    const [featured, setFeatured] = useState(false)

    const handleAddDestination = () => {
        dispatch(addDestination({
            title,
            country,
            city,
            description,
            featured,
            isLive: false
        }))
        setShow(false)
    }

    return (
        <Modal show={show} onHide={() => setShow(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input style={{ borderRadius: '6px', border: '2px #999 solid' }} type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Title' required />
                <input style={{ borderRadius: '6px', border: '2px #999 solid' }} type="text" onChange={(e) => setCountry(e.target.value)} placeholder='Country' required />
                <input style={{ borderRadius: '6px', border: '2px #999 solid' }} type="text" onChange={(e) => setCity(e.target.value)} placeholder='City' required />
                <input style={{ borderRadius: '6px', border: '2px #999 solid' }} type="text" onChange={(e) => setDescription(e.target.value)} placeholder='Description' required />
                <div onChange={(e) => setFeatured(e.target.checked)} className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" for="flexSwitchCheckDefault">Featured</label>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAddDestination}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddEditDestination