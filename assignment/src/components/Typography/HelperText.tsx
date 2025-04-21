import React from 'react';

interface HelperTextProps {
  children: React.ReactNode;
  state?: 'default' | 'error' | 'success';
  className?: string;
}

const stateClasses = {
  default: 'text-gray-500',
  error: 'text-red-600',
  success: 'text-green-600',
};

const HelperText: React.FC<HelperTextProps> = ({ children, state = 'default', className }) => (
  <p className={`text-xs mt-1 ${stateClasses[state]} ${className}`}>
    {children}
  </p>
);

export default HelperText;
