import { Dispatch, SetStateAction, createContext, useContext } from 'react';

type DrawerContextType = {
  open: boolean;
  rendering: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setRendering: Dispatch<SetStateAction<boolean>>;
};

export const DrawerContext = createContext<DrawerContextType>({
  open: false,
  rendering: false,
  setOpen: () => {},
  setRendering: () => {},
});

export default function useDrawer() {
  const { open, rendering, setOpen, setRendering } = useContext(DrawerContext)!;

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
