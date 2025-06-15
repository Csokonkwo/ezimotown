import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { Spinner } from '../spinner/spinner';
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-[10.2px] hover:bg-black text-sm font-medium transition-colors focus-visible:outline focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-black-8 cursor-pointer border-black-15 text-gray-60 border border-black-15  shadow hover:bg-black',
      },
      size: {
        default: 'h-10 lg:h-14 lg:py-3 px-4.5',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'size-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
    icon?: React.ReactNode;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      isLoading,
      icon,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {isLoading && <Spinner />}
        <span className="mx-2">{children}</span>
        {!isLoading && icon && <span className="ml-2">{icon}</span>}
      </Comp>
    );
  },
);

Button.displayName = 'Button';
export { Button, buttonVariants };
