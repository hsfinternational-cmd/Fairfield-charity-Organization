import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                    {
                        'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]': variant === 'primary',
                        'bg-[var(--color-secondary)] text-[var(--color-text-dark)] hover:bg-[var(--color-secondary-dark)]': variant === 'secondary',
                        'bg-[var(--color-text-dark)] text-white hover:opacity-90': variant === 'dark',
                        'border-2 border-[var(--color-text-dark)] text-[var(--color-text-dark)] hover:bg-gray-100': variant === 'outline',
                        'hover:bg-gray-100/50 hover:text-[var(--color-primary)]': variant === 'ghost',
                        'h-9 px-4 text-sm': size === 'sm',
                        'h-11 px-8 text-base': size === 'md',
                        'h-14 px-10 text-lg': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, cn };
