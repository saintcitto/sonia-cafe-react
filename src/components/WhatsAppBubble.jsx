import React from 'react';

const WhatsAppBubble = ({ room }) => {
  const phoneNumber = "6285362962929";
  const message = `Nomor Ruangan: KTV ${room}\nPesan apa dan jumlahnya berapa:`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-bubble"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="images/whatsappicon.png"
        alt="Chat di WhatsApp"
        className="whatsapp-icon-img"
      />
    </a>
  );
};

export default WhatsAppBubble;