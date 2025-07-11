import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './field-wrapper';
import * as React from 'react';
import { cn } from '@/utils/cn';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldWrapperPassThroughProps & {
    className?: string;
    registration: Partial<UseFormRegisterReturn>;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, registration, ...props }, ref) => {
    return (
      <FieldWrapper label={label} error={error}>
        <input
          type={type}
          className={cn(
            'flex h-12 lg:h-14 text-[14px]  w-full rounded-md font-helvetica font-[400] text-grey-40 border-grey-15 bg-grey-10 px-3 py-4 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...registration}
          {...props}
        />
      </FieldWrapper>
    );
  },
);

Input.displayName = 'Input';
export { Input };
