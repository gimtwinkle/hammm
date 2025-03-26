import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

const inputVariants = cva(
  'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
  {
    variants: {
      variant: {
        default:
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        error:
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        success: 'border-green-500 focus-visible:ring-green-500/50',
        warning: 'border-yellow-500 focus-visible:ring-yellow-500/50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Input = ({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'input'> &
  VariantProps<typeof inputVariants> & {
    asChild?: boolean;
  }) => {
  const Comp = asChild ? Slot : 'input';

  return (
    <Comp
      data-slot="button"
      className={cn(inputVariants({ variant, className }))}
      {...props}
    />
  );
};

export { Input, inputVariants };
