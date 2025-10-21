import React, { useState, useEffect } from 'react';

const AppHeader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="app-header">
            <nav className="container nav-container">
                <a 
                    href="#home" 
                    className={`nav-brand ${isVisible ? 'show' : 'hide'}`}
                >
                    Sonia Cafe
                </a>
            </nav>
        </header>
    );
};

export default AppHeader;