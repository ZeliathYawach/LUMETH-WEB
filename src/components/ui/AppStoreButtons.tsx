import React from 'react';

interface AppStoreButtonsProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function AppStoreButtons({ className = '', variant = 'light' }: AppStoreButtonsProps) {
  const baseButtonClass = "transition-opacity hover:opacity-90";
  
  return (
    <div className={`flex flex-wrap gap-4 items-center ${className}`}>
      <a
        href="#"
        className={baseButtonClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`https://tools.applemediaservices.com/api/badges/download-on-the-app-store/${variant === 'light' ? 'black' : 'white'}/en-us`}
          alt="Download on the App Store"
          className="h-[40px] w-auto transition-transform hover:scale-105"
        />
      </a>
      <a
        href="#"
        className={baseButtonClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`https://play.google.com/intl/en_us/badges/images/generic/${variant === 'light' ? 'en_badge_web_generic.png' : 'en_badge_web_generic.png'}`}
          alt="Get it on Google Play"
          className="h-[40px] w-auto transition-transform hover:scale-105"
        />
      </a>
    </div>
  );
}