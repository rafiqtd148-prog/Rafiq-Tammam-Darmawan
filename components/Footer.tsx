
import React from 'react';

const Footer = () => {
  return (
    <footer className="my-4 mx-4 p-5 rounded-2xl bg-gradient-to-b from-space-pastel-1/10 to-space-pastel-2/5 text-center">
      <div className="font-bold text-space-text">Harmony Space</div>
      <div className="text-sm text-space-muted">Your Concert, Your Space, Your Harmony • © 2025</div>
      <div className="mt-3 flex justify-center items-center gap-2">
        <a href="#" title="Download on Play Store">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10" />
        </a>
        <a href="#" title="Download on App Store">
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
