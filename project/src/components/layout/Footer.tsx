import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Spade } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gold/30 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <Spade className="h-6 w-6 text-gold" />
              <span className="ml-2 text-lg font-serif font-bold bg-gradient-to-r from-red-700 to-gold text-transparent bg-clip-text">
                Ace High
              </span>
            </Link>
            <p className="mt-2 text-sm">
              Perfect your poker skills with our provably fair gaming platform.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-3">Practice</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/practice" className="text-sm hover:text-gold transition-colors">
                  Game Room
                </Link>
              </li>
              <li>
                <Link to="/practice/timed" className="text-sm hover:text-gold transition-colors">
                  Timed Challenges
                </Link>
              </li>
              <li>
                <Link to="/practice/verify" className="text-sm hover:text-gold transition-colors">
                  Verify Fairness
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-3">Learning</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/learning-hub" className="text-sm hover:text-gold transition-colors">
                  Hand Rankings
                </Link>
              </li>
              <li>
                <Link to="/learning-hub/strategy" className="text-sm hover:text-gold transition-colors">
                  Strategy Guide
                </Link>
              </li>
              <li>
                <Link to="/learning-hub/tutorials" className="text-sm hover:text-gold transition-colors">
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-3">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gold transition-colors">
                  Terms & Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gold/10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Ace High Poker. All rights reserved.
          </p>
          <p className="text-xs mt-2 sm:mt-0 flex items-center">
            Made with <Heart className="h-3 w-3 text-red-600 mx-1" /> for poker enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;