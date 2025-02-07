import React from 'react';
import { SocialLink } from '../types';

interface HeaderProps {
  name: string;
  title: string;
  socialLinks: SocialLink[];
}

const Header = ({ name, title, socialLinks }: HeaderProps) => {
  return (
    <header className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white">
      <div className="text-center">
        <div className="mb-8">
          <img 
            src="/images/avita.jpg" 
            alt={name}
            className="w-48 h-48 rounded-full mx-auto shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{name}</h1>
        <h2 className="text-xl text-gray-600 mb-6">{title}</h2>
        <div className="flex gap-4 justify-center">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-amber-600 transition-colors"
            >
              <i className={link.icon} aria-label={link.platform}></i>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header; 