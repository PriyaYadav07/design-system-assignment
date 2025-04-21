

import React, { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type: 'info' | 'success' | 'error' | 'warning';
  duration?: number; 
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose && onClose();
    }, duration);

    return () => clearTimeout(timer); 
  }, [duration, onClose]);

  if (!isVisible) return null;

  const toastClasses = {
    info: 'bg-blue-500 text-white',
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-black',
  };

  return (
    <div
      className={`fixed bottom-5 right-5 max-w-sm w-full py-3 px-5 rounded-md shadow-lg ${toastClasses[type]} flex items-center space-x-3`}
    >
      <div className="flex-1">{message}</div>
      <button onClick={() => setIsVisible(false)} className="text-white hover:text-gray-300">
        &times;
      </button>
    </div>
  );
};

export default Toast;

