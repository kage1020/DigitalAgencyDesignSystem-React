import TextField from '../components/TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    supportText: { control: 'text' },
    errorText: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    label: 'ラベル',
    supportText: 'サポートテキスト',
  },
};

export const Required = {
  args: {
    label: 'ラベル',
    errorText: 'エラーメッセージ',
    required: true,
  },
};
