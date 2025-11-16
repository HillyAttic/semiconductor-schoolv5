import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = "918755396383";
  const message = encodeURIComponent("Hi, I'm interested in Semiconductor School's programs and would like more information.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-10 h-10 sm:w-12 sm:h-12 bg-green-500 border-2 border-black hover:bg-green-600 transition-colors duration-300 brutalist-shadow flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <img
          src="https://cliply.co/wp-content/uploads/2021/08/372108180_WHATSAPP_ICON_400.gif"
          alt="WhatsApp"
          className="w-6 h-6 sm:w-7 sm:h-7"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;