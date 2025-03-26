import React from 'react';
import { Input, inputVariants } from '@/components/shadcn/input';
import { type VariantProps } from 'class-variance-authority';

interface ComboInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  placeholder?: string;
  label?: string;
  htmlFor?: string;
}

const ComboInput = React.forwardRef<HTMLInputElement, ComboInputProps>(
  (
    { className, label, type, placeholder, variant, htmlFor, ...props },
    ref
  ) => {
    return (
      <div>
        <Input
          id={htmlFor}
          type={type}
          variant={variant}
          placeholder={placeholder}
          className={className}
          {...props}
        />
      </div>
    );
  }
);

ComboInput.displayName = 'ComboInput';

export default ComboInput;
