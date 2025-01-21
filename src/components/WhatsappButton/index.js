import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5491135714900?text=Hola, estoy interesado en sus servicios." // Cambia por tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all z-20"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="w-6 h-6"
      >
        <path d="M13.601 2.326A7.873 7.873 0 0 0 8.004 0C3.593 0 0 3.592 0 8.004a7.948 7.948 0 0 0 1.434 4.55L.283 15.011a.618.618 0 0 0 .776.776l2.457-1.151a7.948 7.948 0 0 0 4.488 1.368h.003c4.411 0 8.003-3.592 8.003-8.004a7.873 7.873 0 0 0-2.406-5.679Zm-5.598 12.11h-.002a6.841 6.841 0 0 1-3.758-1.113l-.27-.165-1.832.857.39-1.875-.18-.29a6.832 6.832 0 0 1-1.165-3.85 6.867 6.867 0 0 1 11.707-4.853 6.852 6.852 0 0 1 2.015 4.853c0 3.791-3.086 6.877-6.877 6.877ZM11.34 9.29c-.196-.098-1.162-.575-1.342-.64-.18-.066-.312-.098-.444.098-.13.196-.506.64-.62.772-.114.13-.23.147-.426.049-.196-.097-.83-.305-1.583-.973-.585-.519-.98-1.161-1.095-1.356-.114-.196-.012-.302.086-.399.089-.089.196-.23.295-.345.098-.114.13-.196.196-.327.065-.13.033-.245-.016-.342-.049-.097-.444-1.073-.608-1.472-.16-.386-.325-.335-.444-.335h-.38c-.131 0-.343.049-.522.245s-.685.669-.685 1.632c0 .963.701 1.891.799 2.022.098.13 1.383 2.114 3.354 2.96.469.202.835.322 1.12.412.47.149.9.128 1.242.078.378-.056 1.162-.474 1.326-.932.164-.459.164-.851.114-.933-.049-.081-.18-.13-.378-.23Z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
