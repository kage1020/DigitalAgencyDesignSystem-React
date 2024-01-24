import ModalDialogProvider from '../src/providers/modal-dialog';
import DrawerProvider from '../src/providers/drawer';
import '../src/index.css';

/** @type { import('@storybook/react').Preview } */
const preview = {};

export default preview;

export const decorators = [
  (Story) => (
    <ModalDialogProvider>
      <DrawerProvider>
        <Story />
      </DrawerProvider>
    </ModalDialogProvider>
  ),
];
