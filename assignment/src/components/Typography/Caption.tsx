import React from 'react';

interface CaptionProps {
  children: React.ReactNode;
  className?: string;
}

const Caption: React.FC<CaptionProps> = ({ children, className }) => (
  <span className={`text-xs text-gray-500 dark:text-gray-400 ${className}`}>{children}</span>
);

export default Caption;
