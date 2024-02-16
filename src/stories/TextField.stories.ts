import TextField from "../components/TextField"

export default {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    type: { control: "text" },
    supportText: { control: "text" },
    errorText: { control: "text" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
  },
}

export const Default = {
  args: {
    label: "ラベル",
  },
}

export const Required = {
  args: {
    label: "ラベル",
    required: true,
  },
}

export const Filled = {
  args: {
    label: "ラベル",
    value: "入力済みの内容",
    supportText: "サポートテキスト",
  },
}

export const Error = {
  args: {
    label: "ラベル",
    value: "誤った入力内容",
    type: "email",
    required: true,
    errorText: "エラーメッセージ",
  },
}
