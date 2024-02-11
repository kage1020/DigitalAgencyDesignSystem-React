import Button from './components/Button';
import ScrollTopButton from './components/ScrollTop';
import BottomNavigation, { BottomNavigationWithDrawer } from './components/BottomNavigation';
import ModalDialog from './components/ModalDialog';
import useModal from './hooks/useModalDialog';
import useDrawer from './hooks/useDrawer';
import Drawer from './components/Drawer';
import TextField from './components/TextField';
import TextArea from './components/TextArea';
import { cn, tv } from './libs/util';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  // const { open, setOpen } = useModal();
  // const { open, setOpen } = useDrawer();
  return (
    <div className='h-screen w-screen grid place-items-center dark:bg-grey-900'>
      <ThemeSwitcher />
      <div className='flex justify-center items-center gap-3 p-3'>
        <ScrollTopButton variant='secondary'></ScrollTopButton>
      </div>
    </div>
  );
}

export default App;
