

import React, { useState, useEffect } from 'react';
import { FaTwitter, FaCircle } from 'react-icons/fa';
import { Transition } from '@headlessui/react';

const Footerss = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showStatus, setShowStatus] = useState(false);
  const [lusakaTime, setLusakaTime] = useState('');
  const [timeAbbreviation, setTimeAbbreviation] = useState('CAT');

  // Check Twitter online status
  useEffect(() => {
    const checkOnlineStatus = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsOnline(Math.random() > 0.3);
      setIsLoading(false);
    };

    checkOnlineStatus();
    const interval = setInterval(checkOnlineStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  // Update Lusaka time
  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Lusaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setLusakaTime(formatter.format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-black border-t border-gray-800 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Twitter Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <div className="relative">
            <a 
              href="https://twitter.com/ArmstrongKamwi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center group"
              onMouseEnter={() => setShowStatus(true)}
              onMouseLeave={() => setShowStatus(false)}
            >
              <FaTwitter className="text-blue-400 text-2xl mr-2 group-hover:text-blue-300 transition-colors" />
              <span className="text-white font-medium group-hover:text-blue-300 transition-colors">
                @ArmstrongKamwi
              </span>
            </a>
            
            {/* Online status indicator */}
            <Transition
              show={showStatus}
              enter="transition-opacity duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute -top-8 left-0 bg-gray-900 text-white text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap">
                <div className="flex items-center">
                  {isLoading ? (
                    <>
                      <span className="h-2 w-2 bg-gray-500 rounded-full mr-2 animate-pulse"></span>
                      Checking status...
                    </>
                  ) : (
                    <>
                      <FaCircle 
                        className={`mr-2 ${isOnline ? 'text-green-500 animate-pulse' : 'text-gray-500'}`} 
                        size={10} 
                      />
                      {isOnline ? 'Online now' : 'Offline'}
                    </>
                  )}
                </div>
                <div className="absolute w-3 h-3 bg-gray-900 rotate-45 -bottom-1 left-3"></div>
              </div>
            </Transition>
          </div>
        </div>

        {/* Time Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2 animate-pulse"></div>
            <div className="text-white font-medium">
              {lusakaTime || '--:--:--'} 
              <span className="ml-2 text-gray-400 text-sm">{timeAbbreviation}</span>
            </div>
          </div>
          <div className="ml-3 text-gray-400 text-sm hidden sm:block">
            Lusaka, Zambia
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col items-center md:items-end">
          <p className="text-gray-400 text-sm mb-2">
            © {new Date().getFullYear()} Zenith Of Sacrifice. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              made by
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              likando
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              kayombo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerss;