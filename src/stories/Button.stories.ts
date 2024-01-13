import Button from '../components/Button';

export default {
  title: 'Button/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    size: {
      options: ['x-small', 'small', 'medium', 'large'],
      control: { type: 'select' },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
  },
};

export const Primary = {
  args: {
    children: 'ラベル',
    size: 'large',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    children: 'ラベル',
    size: 'large',
    variant: 'secondary',
  },
};

export const Tertiary = {
  args: {
    children: 'ラベル',
    size: 'large',
    variant: 'tertiary',
  },
};
