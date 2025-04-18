import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { login } from '../../redux/slices/auth/authAsyncThunk';

import './Connect.css';
import { useNavigate } from 'react-router-dom';

const Connect = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { data, error, isLoading, isLoaggedIn, status } = useSelector(state => state.auth.auth)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const variants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
        exit: { opacity: 0, y: 20, transition: { duration: 0.2, ease: 'easeInOut' } },
    };

    const loginAdmin = () => {
        dispatch(login({ email, password }))
    }

    useEffect(() => {
        if (status === 'fulfilled') {
            navigate('/')
        }
    }, [status])


    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="container"
            style={{ height: '60vh' }}
        >
            <section className="contact-form">
                <h2>Login</h2>
                <div className="form">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your Email" required />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Your Password" required />
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', color: 'red', height: '50px' }}>
                        {
                            error &&
                            error?.errors?.map((err, index) => (
                                <span key={index}>{err.msg}</span>
                            ))
                        }
                    </div>
                    <button onClick={loginAdmin}>
                        {!isLoading && <span>Login</span>}
                        {isLoading && <FontAwesomeIcon icon={faSpinner} spin />}
                    </button>
                </div>
            </section>
        </motion.div>
    )
}

export default Connect;