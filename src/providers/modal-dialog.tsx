import React, { ReactNode, useState } from 'react';
import { ModalDialogContext } from '../hooks/useModalDialog';

export default function ModalDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [rendering, setRendering] = useState(false);
  return (
    <ModalDialogContext.Provider value={{ open, rendering, setOpen, setRendering }}>
      {children}
    </ModalDialogContext.Provider>
  );
}
