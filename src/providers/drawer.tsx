import React, { ReactNode, useState } from 'react';
import { DrawerContext } from '../hooks/useDrawer';

export default function DrawerProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [rendering, setRendering] = useState(false);
  return (
    <DrawerContext.Provider value={{ open, rendering, setOpen, setRendering }}>
      {children}
    </DrawerContext.Provider>
  );
}
