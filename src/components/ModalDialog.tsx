import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import useModalDialog from '../hooks/useModalDialog';
import { cn } from '../libs';
import {
  ModalDialogActionsProps,
  ModalDialogContentProps,
  ModalDialogOverlayProps,
  ModalDialogProps,
} from '../types';

export function ModalDialogOverlay({ className }: ModalDialogOverlayProps) {
  const { open, rendering, setOpen } = useModalDialog();

  return createPortal(
    <div
      className={cn(
        'fixed inset-0 z-10 bg-black/30 transition duration-400',
        (!open || rendering) && 'opacity-0',
        open && !rendering && 'opacity-100',
        className
      )}
      onClick={() => setOpen(false)}
    />,
    document.querySelector('#modal-dialog')!
  );
}

export function ModalDialogContent({ className, children }: ModalDialogContentProps) {
  return <div className={cn('grid gap-2', className)}>{children}</div>;
}

export function ModalDialogActions({ className, children }: ModalDialogActionsProps) {
  return <div className={cn('grid gap-1', className)}>{children}</div>;
}

function ModalDialog({ className, children }: ModalDialogProps) {
  const { open, rendering } = useModalDialog();

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        const modal = document.getElementById('modal-dialog');
        if (modal) {
          document.body.removeChild(modal);
        }
        document.body.style.overflow = 'auto';
      }, 400);
    }
  }, [open]);

  if (open === false && rendering === false) return null;
  if (!document.querySelector('#modal-dialog')) {
    const root = document.createElement('div');
    root.id = 'modal-dialog';
    root.className = cn('absolute inset-0 z-10 grid place-items-center px-3', className);
    document.body.appendChild(root);
    document.body.style.overflow = 'hidden';
  }

  return createPortal(
    <div
      className={cn(
        'bg-white z-20 relative transition duration-400 w-full p-2 desktop:px-[56px] desktop:py-5 grid gap-3 desktop:gap-5',
        (!open || rendering) && 'opacity-0 -translate-y-full',
        open && !rendering && 'opacity-100 translate-y-0',
        className
      )}
    >
      {children}
    </div>,
    document.querySelector('#modal-dialog')!
  );
}

ModalDialog.Overlay = ModalDialogOverlay;
ModalDialog.Content = ModalDialogContent;
ModalDialog.Actions = ModalDialogActions;

export default ModalDialog;
