import React from "react";
import { Button } from "@/components/ui/button";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";

interface ComboButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
  VariantProps<typeof buttonVariants> {
  label?: string;
}

const ComboButton = React.forwardRef<HTMLButtonElement, ComboButtonProps>(
  ({ label = "Click me", className, variant, size, ...props }, ref) => {
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

ComboButton.displayName = "ComboButton";

export default ComboButton;
