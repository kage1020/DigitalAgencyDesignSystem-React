import type { Preview } from "@storybook/react"
import { withThemeByClassName } from "@storybook/addon-styling"
import ThemeProvider from "../src/providers/theme"
import React from "react"
import "../src/index.css"

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
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
