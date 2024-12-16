import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ to, children, className = '' }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (to.startsWith('/#')) {
      e.preventDefault();
      const element = document.getElementById(to.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`relative group ${className}`}
    >
      <span className="relative z-10 text-gray-200 hover:text-amber-400 transition-colors duration-300">
        {children}
      </span>
      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-amber-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </Link>
  );
}