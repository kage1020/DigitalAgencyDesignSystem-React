import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn, tv } from '../libs/util';
import useDrawer from '../hooks/useDrawer';
import { DrawerContentProps, DrawerOverlayProps, DrawerProps } from '../types';

const drawerContainerStyle = tv({
  base: 'fixed top-0 z-10 h-screen',
  variants: {
    direction: {
      left: 'left-0',
      right: 'right-0',
    },
    fullWidth: {
      false: 'w-fit',
      true: 'w-screen',
    },
  },
});

const drawerStyle = tv({
  base: 'bg-white z-20 relative h-full transition duration-400 p-2 desktop:px-[56px] desktop:py-5 grid gap-3 desktop:gap-5',
});

export function DrawerOverlay({ className }: DrawerOverlayProps) {
  const { open, rendering, setOpen } = useDrawer();

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
    document.querySelector('#drawer')!
  );
}

export function DrawerContent({ className, children }: DrawerContentProps) {
  return <div className={cn('grid gap-2', className)}>{children}</div>;
}

function Drawer({ className, direction = 'left', fullWidth = false, children }: DrawerProps) {
  const { open, rendering } = useDrawer();

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        const drawer = document.getElementById('drawer');
        if (drawer) {
          document.body.removeChild(drawer);
        }
        document.body.style.overflow = 'auto';
      }, 400);
    }
  }, [open]);

  if (open === false && rendering === false) return null;
  if (!document.querySelector('#drawer')) {
    const root = document.createElement('div');
    root.id = 'drawer';
    root.className = drawerContainerStyle({ className });
    root.dataset.testid = 'drawer';
    document.body.appendChild(root);
    document.body.style.overflow = 'hidden';
  }

  return createPortal(
    <div
      className={cn(
        'bg-white z-20 relative h-full transition duration-400 p-2 desktop:px-[56px] desktop:py-5 grid gap-3 desktop:gap-5',
        (!open || rendering) && direction === 'left' && '-translate-x-full',
        (!open || rendering) && direction === 'right' && 'translate-x-full',
        open && !rendering && 'translate-x-0',
        className
      )}
    >
      {children}
    </div>,
    document.querySelector('#drawer')!
  );
}

Drawer.Overlay = DrawerOverlay;
Drawer.Content = DrawerContent;

export default Drawer;
