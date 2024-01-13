import Button from './components/Button';
import ScrollTopButton from './components/ScrollTop';
import BottomNavigation, { BottomNavigationWithDrawer } from './components/BottomNavigation';

function App() {
  return (
    <div className='App'>
      {/* <Button size='small'>ラベル</Button> */}
      {/* <ScrollTopButton /> */}
      {/* <BottomNavigation active='home' /> */}
      <BottomNavigationWithDrawer active='home' />
    </div>
  );
}

export default App;
