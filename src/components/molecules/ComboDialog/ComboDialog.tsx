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
  onCanCel?: () => void;
  triggerLabel?: string;
  cancelBtnName: string;
  confirmBtnName: string;
}

export const ComboDialog: React.FC<ComboDialogProps> = ({
  title = 'Dialog Title',
  description = 'This is a dialog description.',
  content = 'Dialog body content goes here.',
  cancelBtnName,
  confirmBtnName,
  showFooter = true,
  onConfirm,
  onCanCel,
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
              <Button onClick={onCanCel} variant="secondary">
                {cancelBtnName}
              </Button>
            </DialogClose>
            <Button onClick={onConfirm}>{confirmBtnName}</Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};
