import React, { ReactNode, createContext } from 'react';

type ModalContext = {
  dialogState: boolean;
  setDialogState: (state: boolean) => void;
};

const modalContext = createContext(null);

export default function ModalProvider({ children }: { children: ReactNode }) {}
