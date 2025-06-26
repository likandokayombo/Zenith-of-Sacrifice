// Error.jsx
import React from 'react';

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-4">
      <div className="text-center max-w-2xl">
        <div className="relative">
          {/* Animated floating elements */}
          <div className="absolute -top-24 -left-20 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-20 w-48 h-48 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          
          {/* Main content */}
          <h1 className="relative text-9xl font-bold text-white mb-4 z-10">
            4<span className="text-pink-500 animate-pulse">0</span>4
          </h1>
        </div>
        
        <h2 className="text-4xl font-bold text-white mb-6">
          Page Not Found
        </h2>
        
        <p className="text-xl text-purple-200 mb-10 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex justify-center">
          <a 
            href="/"
            className="relative px-8 py-4 bg-white text-purple-900 font-bold rounded-full transition-all duration-300
                       hover:shadow-lg hover:shadow-pink-500/50 hover:-translate-y-1
                       focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50
                       transform hover:scale-105"
          >
            Return Home
            <span className="absolute top-0 right-0 flex h-3 w-3 -mt-1 -mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;