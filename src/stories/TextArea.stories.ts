import TextArea from '../components/TextArea';

export default {
  title: 'Components/TextArea',
  component: TextArea,
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
