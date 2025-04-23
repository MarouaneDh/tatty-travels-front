import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { logout } from '../redux/slices/auth/authSlice';

import './Navbar.css';

const Header = () => {
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const token = localStorage.getItem('token');

    const handleBurgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavLinkClick = () => {
        setIsMenuOpen(false);
    };

    const handleLogout = () => {
        dispatch(logout())
        window.location.reload()
    }

    return (
        <header className="sticky-header">
            <div className="container nav-container">
                <h1 className="logo">Tatty travels</h1>
                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li><Link to="/" className="nav-link" onClick={handleNavLinkClick}>Home</Link></li>
                        <li><Link to="/explore" className="nav-link" onClick={handleNavLinkClick}>Explore</Link></li>
                        <li><Link to="/stories" className="nav-link" onClick={handleNavLinkClick}>Stories</Link></li>
                        <li><Link to="/gallery" className="nav-link" onClick={handleNavLinkClick}>Gallery</Link></li>
                        {
                            token ? <li onClick={handleLogout}><Link className="nav-link" >Logout</Link></li> :
                                <li><Link to="/login" className="nav-link" onClick={handleNavLinkClick}>Login</Link></li>
                        }
                    </ul>
                </nav>
                <div className={`burger-menu ${isMenuOpen ? 'active' : ''}`} onClick={handleBurgerClick}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </header>
    )
}

export default Header