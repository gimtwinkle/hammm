import { cn } from '@/lib/utils';
import React from 'react';

type TextProps = {
  variant?: 'default' | 'muted' | 'subtle' | 'error';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export function ComboText({
  variant = 'default',
  size = 'base',
  weight = 'normal',
  as: Comp = 'p',
  className,
  children,
}: TextProps) {
  const variantClasses = {
    default: 'text-foreground',
    muted: 'text-muted-foreground',
    subtle: 'text-gray-500',
    error: 'text-destructive',
  };

  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  return (
    <Comp
      className={cn(
        variantClasses[variant],
        sizeClasses[size],
        weightClasses[weight],
        className
      )}
    >
      {children}
    </Comp>
  );
}
