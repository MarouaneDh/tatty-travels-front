import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addDestination } from '../../../redux/slices/destinations/destinationsAsyncThunk';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './AddDestination.css';

const AddDestination = ({ show, setShow }) => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [description, setDescription] = useState('')
    const [featured, setFeatured] = useState(false)

    const [titleError, setTitleError] = useState('')
    const [countryError, setCountryError] = useState('')
    const [cityError, setCityError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')

    const [check, setCheck] = useState(false)

    const closeModal = () => {
        setShow(false)
        setCheck(false)
        setTitle('')
        setCountry('')
        setCity('')
        setDescription('')
        setFeatured(false)
        setTitleError('')
        setCountryError('')
        setCityError('')
        setDescriptionError('')
    }

    const handleAddDestination = () => {
        setCheck(true)
        if (checkErrors()) {
            dispatch(addDestination({
                title,
                country,
                city,
                description,
                featured,
                isLive: false
            }))
            closeModal()
        }
    }

    const checkErrors = () => {
        if (title === '') {
            setTitleError('Title is required')
        } else {
            setTitleError('')
        }
        if (country === '') {
            setCountryError('Country is required')
        } else {
            setCountryError('')
        }
        if (city === '') {
            setCityError('City is required')
        } else {
            setCityError('')
        }
        if (description === '') {
            setDescriptionError('Description is required')
        } else {
            setDescriptionError('')
        }
        if (title && country && city && description) {
            return true
        }
    }

    useEffect(() => {
        if (check) {
            checkErrors()
        }
    }, [title, country, city, description, check])

    return (
        <Modal show={show} onHide={closeModal} centered>
            <Modal.Header closeButton>
                <Modal.Title>Adding new destination</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal_body'>
                <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
                <span className='text_error'>{titleError}</span>
                <input type="text" onChange={(e) => setCountry(e.target.value)} placeholder='Country' />
                <span className='text_error'>{countryError}</span>
                <input type="text" onChange={(e) => setCity(e.target.value)} placeholder='City' />
                <span className='text_error'>{cityError}</span>
                <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
                <span className='text_error'>{descriptionError}</span>
                <div onChange={(e) => setFeatured(e.target.checked)} className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Featured</label>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleAddDestination}>
                    Add new destination
                </Button>
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddDestination