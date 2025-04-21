import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => (
  <p className={`text-base leading-normal text-gray-800 dark:text-gray-100 ${className}`}>
    {children}
  </p>
);

export default Paragraph;
