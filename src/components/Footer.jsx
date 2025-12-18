import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white/20 backdrop-blur-lg text-white flex flex-col items-center justify-center px-4 py-4 md:py-3 z-50 space-y-3 md:space-y-0 md:flex-row md:justify-between">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm font-light text-gray-200 opacity-70">
            ©2025 Moov'Up. Tous droits réservés.
          </p>
          <div className="flex gap-2">
  {/* Instagram */}
  <a href="https://www.instagram.com/moovupsports?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"> <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 fill-gray-200 opacity-70 hover:opacity-100 transition-opacity duration-200" > <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.227-1.667 4.771-4.919 4.919-1.266.058-1.645.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.205.012-3.584.069-4.849.148-3.227 1.667-4.771 4.919-4.919 1.266-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.333.014 7.052.072 2.695.272.273 2.695.072 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.357 2.623 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.668-.014 4.948-.072c4.357-.2 6.78-2.623 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.2-4.357-2.623-6.78-6.98-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/> </svg> </a>

  {/* Facebook */}
  <a
    href="https://web.facebook.com/clubmoovupfitness"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 sm:w-5 sm:h-5 fill-gray-200 opacity-70 hover:opacity-100 transition-opacity duration-200"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/212648303100"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 sm:w-5 sm:h-5 fill-gray-200 opacity-70 hover:opacity-100 transition-opacity duration-200"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0012.01 0C5.39 0 .02 5.37.02 11.99c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62a11.93 11.93 0 005.83 1.48h.01c6.62 0 11.99-5.37 11.99-11.99 0-3.2-1.25-6.2-3.49-8.39zM12.02 21.53a9.54 9.54 0 01-4.87-1.33l-.35-.21-3.67.96.98-3.57-.23-.36a9.52 9.52 0 01-1.45-5.06c0-5.26 4.28-9.54 9.55-9.54a9.48 9.48 0 016.75 2.8 9.48 9.48 0 012.8 6.74c0 5.27-4.28 9.57-9.51 9.57zm5.23-7.15c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.58-.49-.5-.66-.5-.17 0-.37-.02-.56-.02-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.71.63.72.23 1.38.2 1.9.12.58-.09 1.72-.7 1.97-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.35z"/>
    </svg>
  </a>
</div>

        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
        <p className="text-xs sm:text-sm text-center md:text-left font-light text-gray-200 opacity-70">
          Téléchargez notre application mobile dès maintenant !
        </p>
        <div className="flex gap-2">
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/playstore.png"
              alt="Playstore"
              className="h-7 sm:h-8 hover:opacity-80 transition-opacity duration-200"
            />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img
              src="/appstore.png"
              alt="Appstore"
              className="h-7 sm:h-8 hover:opacity-80 transition-opacity duration-200"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;