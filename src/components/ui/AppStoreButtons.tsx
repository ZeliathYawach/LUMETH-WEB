import React from 'react';

interface AppStoreButtonsProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function AppStoreButtons({ className = '', variant = 'light' }: AppStoreButtonsProps) {
  const baseImageClass = "h-12 transition-transform hover:scale-105";
  const baseButtonClass = "transition-opacity hover:opacity-90";
  
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <a
        href="#"
        className={baseButtonClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`https://tools.applemediaservices.com/api/badges/download-on-the-app-store/${variant === 'light' ? 'black' : 'white'}/en-us`}
          alt="Download on the App Store"
          className={baseImageClass}
        />
      </a>
      <a
        href="#"
        className={baseButtonClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`https://play.google.com/intl/en_us/badges/static/images/badges/${variant === 'light' ? 'en_badge_web_generic.png' : 'en_badge_web_generic_white.png'}`}
          alt="Get it on Google Play"
          className={baseImageClass}
        />
      </a>
    </div>
  );
}