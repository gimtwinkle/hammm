// components/bridges/ComboDialog.tsx
import React from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/shadcn/dialog';
import { Button } from '@/components/shadcn/button';

interface ComboDialogProps {
  title?: string;
  description?: string;
  content?: React.ReactNode;
  showFooter?: boolean;
  onConfirm?: () => void;
  triggerLabel?: string;
}

export const ComboDialog: React.FC<ComboDialogProps> = ({
  title = 'Dialog Title',
  description = 'This is a dialog description.',
  content = 'Dialog body content goes here.',
  showFooter = true,
  onConfirm,
  triggerLabel = 'Open Dialog',
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{triggerLabel}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div>{content}</div>

        {showFooter && (
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
            <Button onClick={onConfirm}>Confirm</Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};
