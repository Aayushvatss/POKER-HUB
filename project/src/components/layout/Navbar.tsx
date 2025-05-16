import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Spade } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black border-b border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Spade className="h-8 w-8 text-gold" />
              <span className="ml-2 text-xl font-serif font-bold bg-gradient-to-r from-red-700 to-gold text-transparent bg-clip-text">
                Ace High
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-gold transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/practice"
              className="text-gray-300 hover:text-gold transition-colors duration-200 font-medium"
            >
              Practice
            </Link>
            <Link
              to="/learning-hub"
              className="text-gray-300 hover:text-gold transition-colors duration-200 font-medium"
            >
              Learning Hub
            </Link>
            <button className="px-4 py-2 bg-gradient-to-r from-red-700 to-red-900 text-white rounded shadow-lg hover:shadow-red-900/50 transition-all duration-200 border border-gold/20">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gold" />
              ) : (
                <Menu className="h-6 w-6 text-gold" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-300 hover:text-gold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/practice"
              className="block px-3 py-2 text-gray-300 hover:text-gold"
              onClick={() => setIsOpen(false)}
            >
              Practice
            </Link>
            <Link
              to="/learning-hub"
              className="block px-3 py-2 text-gray-300 hover:text-gold"
              onClick={() => setIsOpen(false)}
            >
              Learning Hub
            </Link>
            <button 
              className="w-full text-left px-3 py-2 mt-3 bg-gradient-to-r from-red-700 to-red-900 text-white rounded shadow-lg hover:shadow-red-900/50 transition-all duration-200 border border-gold/20"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;