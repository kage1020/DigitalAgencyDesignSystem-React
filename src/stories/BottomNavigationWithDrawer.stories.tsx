import { expect, userEvent, within } from '@storybook/test';
import { BottomNavigationWithDrawer } from '../components/BottomNavigation';

export default {
  title: 'Components/BottomNavigation/WithDrawer',
  component: BottomNavigationWithDrawer,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    active: 'home',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const othersButton = canvas.getByTestId('others');
    await expect(othersButton).toBeInTheDocument();
  },
};

export const Opened = {
  args: {
    active: 'home',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const othersButton = canvas.getByTestId('others');
    await expect(othersButton).toBeInTheDocument();
    await userEvent.click(othersButton);
    const historyButton = document.querySelector('[data-testid="history"]');
    await expect(historyButton).toBeInTheDocument();
  },
};
