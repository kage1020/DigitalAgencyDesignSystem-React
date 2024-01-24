import Button from './components/Button';
import ScrollTopButton from './components/ScrollTop';
import BottomNavigation, { BottomNavigationWithDrawer } from './components/BottomNavigation';
import ModalDialog from './components/ModalDialog';
import useModal from './hooks/useModalDialog';
import useDrawer from './hooks/useDrawer';
import Drawer from './components/Drawer';

function App() {
  // const { open, setOpen } = useModal();
  const { open, setOpen } = useDrawer();
  return (
    <div className='App'>
      {/* <Button size='small'>ラベル</Button> */}
      {/* <ScrollTopButton /> */}
      <p className='h-96'></p>
      {/* <BottomNavigation active='home' /> */}
      <BottomNavigationWithDrawer active='search' />
      {/* <Button onClick={() => setOpen(true)}>open</Button>
      <p className='h-[4096px]'></p>
      <ModalDialog className='shadow rounded-md'>
        <ModalDialog.Overlay />
        <ModalDialog.Content className='grid gap-3'>
          <p className='text-s-mobile text-grey-900'>ダイアログタイトル</p>
          <p>ダイアログの補助テキストが入ります。</p>
        </ModalDialog.Content>
        <ModalDialog.Actions>
          <Button onClick={() => setOpen(false)}>決定</Button>
          <Button variant='tertiary' onClick={() => setOpen(false)}>
            キャンセル
          </Button>
        </ModalDialog.Actions>
      </ModalDialog> */}
      {/* <Button className='w-[960px]' onClick={() => setOpen(true)}>
        開く
      </Button>
      <p className='h-[4096px]'></p>
      <Drawer fullWidth>
        <Drawer.Overlay />
        <Drawer.Content>
          <Button onClick={() => setOpen(false)}>決定</Button>
        </Drawer.Content>
      </Drawer> */}
    </div>
  );
}

export default App;
