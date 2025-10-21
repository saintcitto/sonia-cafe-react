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
            </nav>
        </header>
    );
};

export default AppHeader;