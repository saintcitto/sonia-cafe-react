import React, { useState, useEffect } from 'react';

const AppHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="container nav-container">
                <a href="#home" className="nav-brand">Sonia Cafe</a>

                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default AppHeader;