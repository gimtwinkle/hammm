import React from 'react';
import { Button, buttonVariants } from '@/components/shadcn/button';
import { type VariantProps } from 'class-variance-authority';

interface ComboButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label?: string;
}

const ComboButton = React.forwardRef<HTMLButtonElement, ComboButtonProps>(
  ({ label = 'Click me', className, variant, size, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={className}
        {...props}
      >
        {label}
      </Button>
    );
  }
);

ComboButton.displayName = 'ComboButton';

export default ComboButton;
