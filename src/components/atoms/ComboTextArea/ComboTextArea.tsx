// components/ui/textarea.tsx

import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const textareaVariants = cva(
  'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
  {
    variants: {
      intent: {
        default: '',
        error: 'border-destructive ring-destructive/30',
        success: 'border-green-500 ring-green-300',
      },
      size: {
        sm: 'text-sm py-1 px-2',
        md: 'text-base py-2 px-3',
        lg: 'text-lg py-3 px-4',
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'md',
    },
  }
);

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const ComboTextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, intent, size, ...props }, ref) => {
    return (
      <textarea
        data-slot="textarea"
        ref={ref}
        className={cn(textareaVariants({ intent, size }), className)}
        {...props}
      />
    );
  }
);

ComboTextArea.displayName = 'ComboTextArea';

export { ComboTextArea, textareaVariants };
