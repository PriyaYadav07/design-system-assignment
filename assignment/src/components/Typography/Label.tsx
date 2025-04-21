import React from 'react';

interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ children, htmlFor, className }) => (
  <label htmlFor={htmlFor} className={`text-sm font-medium text-gray-700 dark:text-gray-200 ${className}`}>
    {children}
  </label>
);

export default Label;
