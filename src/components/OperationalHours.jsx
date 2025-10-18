import React, { useRef, useEffect, useState } from 'react';

const OperationalHours = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`content-section operational-hours-section fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
            <div className="container">
                <h2 className="hours-title">Kami Buka!</h2>
                <p className="hours-display">08:00 - 23:30</p>
                <p className="hours-subtitle">Kunjungi kami setiap hari untuk waktu yang menyenangkan.</p>
            </div>
        </section>
    );
};

export default OperationalHours;