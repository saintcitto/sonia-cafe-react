import React from 'react';
import { Mic, Droplet } from 'react-feather';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>Selamat Datang di Sonia Cafe</h1>
                <p>Rasakan perpaduan sempurna antara suasana nyaman, cita rasa yang kaya, dan layanan luar biasa.</p>
                
                <div className="hero-services-summary">
                    <a href="#services" className="summary-card summary-card--details">
                        <Mic size={32} />
                        <h4>Ruang Karaoke</h4>
                        <div className="price-details">
                            <p>10:00 - 17:00: <strong>Rp 45.000/jam</strong></p>
                            <p>17:00 - 00:00: <strong>Rp 60.000/jam</strong></p>
                        </div>
                    </a>
                    
                    {}
                    <a href="#services" className="summary-card summary-card--details">
                        <Droplet size={32} />
                        <h4>Cuci Mobil</h4>
                        <div className="price-details">
                            <p>Senin-Sabtu (08:00-17:00)</p>
                            <p>Minggu (08:00-15:00)</p>
                            <p className="card-price">Harga: <strong>Rp 50.000</strong></p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;