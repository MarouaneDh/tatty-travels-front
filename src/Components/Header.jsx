import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleBurgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavLinkClick = () => {
        setIsMenuOpen(false);
    };

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
                        <li><Link to="/connect" className="nav-link" onClick={handleNavLinkClick}>Connect</Link></li>
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