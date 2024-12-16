import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Instagram, Facebook, Twitter } from 'lucide-react';
import { AppStoreButtons } from './ui/AppStoreButtons';

export function Footer() {
  return (
    <footer className="bg-black border-t border-purple-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Crown className="h-8 w-8 text-amber-400" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
                Lumeth
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing the beauty service industry with AI-powered solutions.
            </p>
            <AppStoreButtons variant="dark" />
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-amber-400 transition-colors">Lumeth App</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-amber-400 transition-colors">Lumeth Helm</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-amber-400 transition-colors">Lumeth Tocca</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-400 hover:text-amber-400 transition-colors">Terms and Conditions</Link></li>
              <li><Link to="/cancellation-policy" className="text-gray-400 hover:text-amber-400 transition-colors">Cancellation and Refund Policy</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/lumethapp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/people/Lumeth/61560421378410/?rdid=OnORerqIEwMXVPcx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1NUDGYqdsw%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors transform hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://x.com/Lumeth_official?t=wKWeTlfEEysl2GqiZl574w&s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors transform hover:scale-110"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 text-sm">Follow us on social media for the latest updates, beauty tips, and exclusive offers!</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-500/20">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Lumeth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}