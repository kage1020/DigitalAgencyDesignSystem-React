import Button from '../components/Button';

export default {
  title: 'Components/Button/Default',
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
    disabled: { control: 'boolean' },
  },
};

export const Primary = {
  args: {
    children: 'ラベル',
    size: 'large',
    variant: 'primary',
  },
};

export const PrimaryDisabled = {
  args: {
    children: 'ラベル',
    size: 'large',
    variant: 'primary',
    disabled: true,
  },
};

export const Secondary = {
  args: {
    children: 'ラベル',
    size: 'large',
    variant: 'secondary',
  },
};

export const SecondaryDisabled = {
  args: {
    children: 'ラベル',
    size: 'large',
    variant: 'secondary',
    disabled: true,
  },
};

export const Tertiary = {
  args: {
    children: 'ラベル',
    size: 'large',
    variant: 'tertiary',
  },
};

export const TertiaryDisabled = {
  args: {
    children: 'ラベル',
    size: 'large',
    variant: 'tertiary',
    disabled: true,
  },
};
