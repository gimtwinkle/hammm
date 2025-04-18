// ComboInput.tsx
import React from 'react';
import { Input, inputVariants } from '@/components/shadcn/input';
import { Label } from '@radix-ui/react-label';
import { VariantProps } from 'class-variance-authority';

interface BaseProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  id: string;
}

const Text = React.forwardRef<HTMLInputElement, BaseProps>(
  ({ label, id, className, type, ...props }, ref) => (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input ref={ref} id={id} type={type} className={className} {...props} />
    </div>
  )
);

const Radio = React.forwardRef<HTMLInputElement, BaseProps>(
  ({ label, id, className, ...props }, ref) => (
    <div className="flex items-center space-x-2">
      <Input ref={ref} id={id} type="radio" className={className} {...props} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  )
);

const Checkbox = React.forwardRef<HTMLInputElement, BaseProps>(
  ({ label, id, className, ...props }, ref) => (
    <div className="flex items-center space-x-2">
      <Input
        ref={ref}
        id={id}
        type="checkbox"
        className={className}
        {...props}
      />
      <Label htmlFor={id}>{label}</Label>
    </div>
  )
);

Text.displayName = 'ComboInput.Text';
Radio.displayName = 'ComboInput.Radio';
Checkbox.displayName = 'ComboInput.Checkbox';

export const ComboInput = {
  Text,
  Radio,
  Checkbox,
};
