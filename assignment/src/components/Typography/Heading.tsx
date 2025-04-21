import React from 'react';
import clsx from 'clsx';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const baseClasses = {
  1: 'text-h1 text-4xl font-bold',
  2: 'text-h2 text-3xl font-bold',
  3: 'text-h3 text-2xl font-semibold',
  4: 'text-h4 text-xl font-semibold',
  5: 'text-h5 text-lg font-medium',
  6: 'text-h6 text-base font-medium',
};

const Heading: React.FC<HeadingProps> = ({ level = 1, children, className }) => {
    const Tag: React.ElementType = `h${level}`;
  return <Tag className={clsx(baseClasses[level], className)}>{children}</Tag>;
};

export default Heading;

