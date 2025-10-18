import React, { useRef, useEffect, useState } from 'react';

const Services = () => {
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
            id="services"
            ref={sectionRef}
            className={`services-section content-section fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
            <div className="container">
                <h2 className="section-title">Layanan Kami</h2>

                <div className="services-grid">
                    <div className="service-card">
                        <h3>Cuci Mobil</h3>
                        <p>Mobil Anda bersih berkilau selagi Anda bersantai dan bersantap.</p>
                        <p className="price">Rp 50.000</p>
                        
                        <div className="service-hours">
                            <h4>Jam Buka</h4>
                            <p>Senin - Sabtu: 08.00 - 17.00</p>
                            <p>Minggu: 08.00 - 15.00</p>
                        </div>
                    </div>

                    <div className="service-card">
                        <h3>Ruang Karaoke</h3>
                        <p>Bernyanyilah sepuasnya di ruang karaoke pribadi kami.</p>
                        <div className="karaoke-slots">
                            <div className="karaoke-slot">
                                <p>Siang (10:00 - 16:00)</p>
                                <p className="price">
                                    Rp 45.000<span>/jam</span>
                                </p>
                            </div>
                            <div className="karaoke-slot">
                                <p>Malam (17:00 - 23:30)</p>
                                <p className="price">
                                    Rp 60.000<span>/jam</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;