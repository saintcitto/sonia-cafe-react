import React from 'react';

const AppFooter = () => {
    return (
        <footer id="contact" className="app-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-about">
                        <h4 className="footer-title">Sonia Cafe</h4>
                        <p>Sudut nyaman Anda untuk makanan lezat, kopi nikmat, dan saat-saat menyenangkan.</p>
                    </div>

                    <div className="footer-contact">
                        <h4 className="footer-title">Hubungi & Kunjungi Kami</h4>
                        <div className="contact-details">
                            <div className="contact-info">
                                <p>
                                    WhatsApp: <a href="https://wa.me/6285362962929" target="_blank" rel="noopener noreferrer">+62 853-6296-2929</a>
                                </p>
                            </div>
                            <div className="map-container">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.081954536962!2d98.96418387497305!3d3.5686155964055843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30314e55aaaaaa9f%3A0xf0977486bdcbb7d2!2sSonia%20Cafe!5e0!3m2!1sen!2sid!4v1760786790848!5m2!1sen!2sid" 
                                    style={{ border: 0 }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Peta Lokasi Sonia Cafe">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <p>
                        © {new Date().getFullYear()} Sonia Cafe. 
                        <span> | </span>
                        <a href="https://instagram.com/cittowest/" target="_blank" rel="noopener noreferrer">
                            Made by @cittowest
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;