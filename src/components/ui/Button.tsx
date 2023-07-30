import type { FC } from 'react';
import React from 'react';
import type { LinkProps } from 'next/link';

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<LinkProps, 'href'> & {
    children?: React.ReactNode;
    href?: string;
  };

const Button: FC<ButtonType> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
