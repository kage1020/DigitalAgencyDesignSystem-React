import type { Preview } from "@storybook/react"
import { withThemeByClassName } from "@storybook/addon-styling"

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
}

export default preview
