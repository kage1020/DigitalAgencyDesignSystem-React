import { Dispatch, SetStateAction, createContext, useContext } from 'react';

type ModalDialogContext = {
  open: boolean;
  rendering: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setRendering: Dispatch<SetStateAction<boolean>>;
};

export const ModalDialogContext = createContext<ModalDialogContext>({
  open: false,
  rendering: false,
  setOpen: () => {},
  setRendering: () => {},
});

export default function useModalDialog() {
  const { open, rendering, setOpen, setRendering } = useContext(ModalDialogContext)!;

  return {
    open,
    rendering,
    setOpen: (p: SetStateAction<boolean>) => {
      setOpen(p);
      setRendering(true);
      setTimeout(() => {
        setRendering(false);
      }, 400);
    },
    setRendering,
  };
}
