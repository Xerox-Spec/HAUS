import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={classNames(
        'px-4 py-2 rounded-md font-medium transition-all',
        variant === 'primary'
          ? 'bg-white text-black hover:bg-zinc-200'
          : 'bg-zinc-800 text-white hover:bg-zinc-700',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
