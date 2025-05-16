import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-red-900/30 py-12 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-600">404</h1>
        <h2 className="text-3xl font-serif font-bold text-white mt-4 mb-6">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          Looks like you've drawn a bad hand. The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-700 to-red-900 text-white rounded-lg shadow-lg hover:shadow-red-900/50 transition-all duration-200"
        >
          <Home className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;