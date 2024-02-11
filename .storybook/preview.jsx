import { withThemeByClassName } from '@storybook/addon-styling';
import ModalDialogProvider from '../src/providers/modal-dialog';
import DrawerProvider from '../src/providers/drawer';
import ThemeProvider from '../src/providers/theme';
import '../src/index.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <ModalDialogProvider>
          <DrawerProvider>
            <Story />
          </DrawerProvider>
        </ModalDialogProvider>
      </ThemeProvider>
    ),
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
