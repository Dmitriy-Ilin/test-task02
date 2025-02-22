import './button.scss';

import { FC, ReactNode } from 'react';
import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'default' | 'hover';

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
};

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled = false,
  className,
  type,
  onClick,
}) => {
  const buttonClasses = clsx(
    'button',
    `button--variant-${variant}`,

    className,
  );

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
