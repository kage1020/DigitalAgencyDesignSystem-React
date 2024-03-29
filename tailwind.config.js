import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    aspectRatio: {
      auto: "auto",
      video: "16 / 9",
      image: "3 / 2",
      square: "1 / 1",
      a4: "210 / 297",
      a5: "148 / 210",
      a6: "105 / 148",
      banner: "234 / 60",
    },
    borderRadius: {
      none: "0px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      full: "9999px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      initial: "initial",
      white: "#FFFFFF",
      black: "#000000",
      blue: {
        50: "#E8F1FE",
        100: "#D9E6FF",
        200: "#C5D7FB",
        300: "#9DB7F9",
        400: "#7096F8",
        500: "#4979F5",
        600: "#3460FB",
        700: "#264AF4",
        800: "#0031D8",
        900: "#0017C1",
        1000: "#00118F",
        1100: "#000071",
        1200: "#000060",
      },
      "light-blue": {
        50: "#F0F9FF",
        100: "#DCF0FF",
        200: "#C0E4FF",
        300: "#97D3FF",
        400: "#57B8FF",
        500: "#39ABFF",
        600: "#008BF2",
        700: "#0877D7",
        800: "#0066BE",
        900: "#0055AD",
        1000: "#00428C",
        1100: "#00316A",
        1200: "#00234B",
      },
      cyan: {
        50: "#E9F7F9",
        100: "#C8F8FF",
        200: "#99F2FF",
        300: "#79E2F2",
        400: "#2BC8E4",
        500: "#01B7D6",
        600: "#00A3BF",
        700: "#008DA6",
        800: "#008299",
        900: "#006F83",
        1000: "#006173",
        1100: "#004C59",
        1200: "#003741",
      },
      green: {
        50: "#E6F5EC",
        100: "#C2E5D1",
        200: "#9BD4B5",
        300: "#71C598",
        400: "#51B883",
        500: "#2CAC6E",
        600: "#259D63",
        700: "#1D8B56",
        800: "#197A4B",
        900: "#115A36",
        1000: "#0C472A",
        1100: "#08351F",
        1200: "#032213",
      },
      lime: {
        50: "#EBFAD9",
        100: "#D0F5A2",
        200: "#C0F354",
        300: "#ADE830",
        400: "#9DDD15",
        500: "#8CC80C",
        600: "#7EB40D",
        700: "#6FA104",
        800: "#618E00",
        900: "#507500",
        1000: "#3E5A00",
        1100: "#2C4100",
        1200: "#1E2D00",
      },
      yellow: {
        50: "#FBF5E0",
        100: "#FFF0B3",
        200: "#FFE380",
        300: "#FFD43D",
        400: "#FFC700",
        500: "#EBB700",
        600: "#D2A400",
        700: "#B78F00",
        800: "#A58000",
        900: "#927200",
        1000: "#806300",
        1100: "#6E5600",
        1200: "#604B00",
      },
      orange: {
        50: "#FFEEE2",
        100: "#FFDFCA",
        200: "#FFC199",
        300: "#FFA66D",
        400: "#FF8D44",
        500: "#FF7628",
        600: "#FB5B01",
        700: "#E25100",
        800: "#C74700",
        900: "#AC3E00",
        1000: "#8B3200",
        1100: "#6D2700",
        1200: "#541E00",
      },
      red: {
        50: "#FDEEEE",
        100: "#FFDADA",
        200: "#FFBBBB",
        300: "#FF9696",
        400: "#FF7171",
        500: "#FF5454",
        600: "#FE3939",
        700: "#FA0000",
        800: "#EC0000",
        900: "#CE0000",
        1000: "#A90000",
        1100: "#850000",
        1200: "#620000",
      },
      magenta: {
        50: "#F3E5F4",
        100: "#FFD0FF",
        200: "#FFAEFF",
        300: "#FF8EFF",
        400: "#F661F6",
        500: "#F137F1",
        600: "#DB00DB",
        700: "#C000C0",
        800: "#AA00AA",
        900: "#8B008B",
        1000: "#6C006C",
        1100: "#500050",
        1200: "#3B003B",
      },
      purple: {
        50: "#F1EAFA",
        100: "#ECDDFF",
        200: "#DDC2FF",
        300: "#CDA6FF",
        400: "#BB87FF",
        500: "#A565F8",
        600: "#8843E1",
        700: "#6F23D0",
        800: "#5C10BE",
        900: "#5109AD",
        1000: "#41048E",
        1100: "#30016C",
        1200: "#21004B",
      },
      grey: {
        50: "#F2F2F2",
        100: "#E6E6E6",
        200: "#CCCCCC",
        300: "#B3B3B3",
        400: "#999999",
        420: "#949494",
        500: "#7F7F7F",
        536: "#767676",
        600: "#666666",
        700: "#4D4D4D",
        800: "#333333",
        900: "#1A1A1A",
      },
      sea: {
        50: "#E8F1FE",
        100: "#C5D7FB",
        200: "#9DB7F9",
        300: "#7096F8",
        400: "#4979F5",
        500: "#264AF4",
        600: "#1A3EE8",
        700: "#0031D8",
        800: "#0017C1",
        900: "#000082",
        1000: "#000071",
        1100: "#000060",
        1200: "#00004F",
      },
      sumi: {
        50: "#F8F8FB",
        100: "#F1F1F4",
        200: "#E8E8EB",
        300: "#D8D8DB",
        400: "#B4B4B7",
        500: "#949497",
        600: "#757578",
        700: "#626264",
        800: "#414143",
        900: "#1A1A1C",
        1000: "#111111",
        1100: "#080808",
        1200: "#000000",
      },
      forest: {
        50: "#E6F5EC",
        100: "#C2E5D1",
        200: "#9BD4B5",
        300: "#71C598",
        400: "#51B883",
        500: "#2CAC6E",
        600: "#259D63",
        700: "#1D8B56",
        800: "#197A4B",
        900: "#115A36",
        1000: "#0C472A",
        1100: "#08351F",
        1200: "#032213",
      },
      wood: {
        50: "#F3EEE5",
        100: "#E7D8B9",
        200: "#E1C383",
        300: "#DCAC4D",
        400: "#D69C2B",
        500: "#D18D0F",
        600: "#CD820A",
        700: "#C87504",
        800: "#C16800",
        900: "#B65200",
        1000: "#9C4600",
        1100: "#833B00",
        1200: "#662E00",
      },
      sun: {
        50: "#FFE7E6",
        100: "#FFC8B8",
        200: "#FFA28B",
        300: "#FF7B5C",
        400: "#FF5838",
        500: "#FF4B36",
        600: "#FF220D",
        700: "#FA1606",
        800: "#EC0000",
        900: "#D50000",
        1000: "#AF0000",
        1100: "#890101",
        1200: "#640101",
      },
    },
    fontSize: {
      "xxxs-mobile": [
        "10px",
        { lineHeight: "1.5", letterSpacing: "0.04em", fontWeight: "500" },
      ],
      xxxs: [
        "14px",
        { lineHeight: "1", letterSpacing: "0.04em", fontWeight: "400" },
      ],
      "xxs-mobile": [
        "16px",
        { lineHeight: "1.7", letterSpacing: "0.04em", fontWeight: "500" },
      ],
      xxs: [
        "20px",
        { lineHeight: "1.5", letterSpacing: "0.04em", fontWeight: "400" },
      ],
      "xs-mobile": [
        "20px",
        { lineHeight: "1.5", letterSpacing: "0.04em", fontWeight: "500" },
      ],
      xs: [
        "24px",
        { lineHeight: "1.5", letterSpacing: "0.04em", fontWeight: "400" },
      ],
      "s-mobile": [
        "24px",
        { lineHeight: "1.5", letterSpacing: "0.04em", fontWeight: "500" },
      ],
      s: [
        "28px",
        { lineHeight: "1.5", letterSpacing: "0.04em", fontWeight: "400" },
      ],
      "m-mobile": [
        "28px",
        { lineHeight: "1.5", letterSpacing: "0.04em", fontWeight: "500" },
      ],
      m: [
        "32px",
        { lineHeight: "1.5", letterSpacing: "0.04em", fontWeight: "400" },
      ],
      "l-mobile": [
        "32px",
        { lineHeight: "1.5", letterSpacing: "0.04em", fontWeight: "500" },
      ],
      l: [
        "36px",
        { lineHeight: "1.4", letterSpacing: "0.04em", fontWeight: "400" },
      ],
      xl: [
        "45px",
        { lineHeight: "1.4", letterSpacing: "0.04em", fontWeight: "400" },
      ],
      xxl: [
        "57px",
        { lineHeight: "1.4", letterSpacing: "0.04em", fontWeight: "400" },
      ],
      "base-l": [
        "16px",
        { lineHeight: "1.7", letterSpacing: "0.04em", fontWeight: "400" },
      ],
      "base-m": [
        "14px",
        { lineHeight: "1.7", letterSpacing: "0.04em", fontWeight: "400" },
      ],
      "label-l": [
        "14px",
        { lineHeight: "1.5", letterSpacing: "0.04em", fontWeight: "500" },
      ],
      "label-m": [
        "12px",
        { lineHeight: "1.5", letterSpacing: "0.04em", fontWeight: "500" },
      ],
      "sup-l": [
        "12px",
        { lineHeight: "1.7", letterSpacing: "0.02em", fontWeight: "400" },
      ],
      "sup-m": [
        "10px",
        { lineHeight: "1.7", letterSpacing: "0.02em", fontWeight: "400" },
      ],
      button: [
        "16px",
        { lineHeight: "1.5", letterSpacing: "0.04em", fontWeight: "700" },
      ],
    },
    fontWeight: {
      r: 400,
      m: 500,
      b: 700,
    },
    height: {
      ...defaultTheme.spacing,
      full: "100%",
      screen: "100vh",
      svh: "100svh",
      lvh: "100lvh",
      dvh: "100dvh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    },
    inset: defaultTheme.spacing,
    letterSpacing: {
      s: "0.02em",
      m: "0.04em",
    },
    lineHeight: {
      s: "1.4",
      m: "1.5",
      l: "1.7",
    },
    maxHeight: {
      ...defaultTheme.spacing,
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    },
    maxWidth: {
      ...defaultTheme.spacing,
      full: "100%",
      screen: "100vw",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    },
    minHeight: {
      ...defaultTheme.spacing,
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    },
    minWidth: {
      ...defaultTheme.spacing,
      full: "100%",
      screen: "100vw",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    },
    screens: {
      desktop: "768px",
      // desktop: '992px', // for app
    },
    spacing: {
      0: "0px",
      px: "1px",
      0.25: "2px",
      0.5: "4px",
      1: "8px",
      2: "16px",
      3: "24px",
      5: "40px",
      8: "64px",
      13: "104px",
      21: "168px",
      34: "272px",
      55: "440px",
    },
    translate: { ...defaultTheme.spacing, full: "100%" },
    width: {
      ...defaultTheme.spacing,
      full: "100%",
      screen: "100vw",
      svw: "100svw",
      lvw: "100lvw",
      dvw: "100dvw",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    },
    extend: {
      fontFamily: {
        "noto-sans": ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
        "noto-sans-jp": ['"Noto Sans JP"', ...defaultTheme.fontFamily.sans],
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".text-body": {
          "@apply text-sumi-900 dark:text-white": {},
        },
        ".text-description": {
          "@apply text-sumi-700 dark:text-sumi-400": {},
        },
        ".text-placeholder": {
          "@apply text-sumi-600 dark:text-sumi-500": {},
        },
        ".text-onfill": {
          "@apply text-white dark:text-white": {},
        },
        ".text-link": {
          "@apply text-sea-800 dark:text-sea-300": {},
        },
        ".text-link-hover": {
          "@apply text-sea-900 dark:text-sea-200": {},
        },
        ".text-link-active": {
          "@apply text-sea-900 dark:text-sea-200": {},
        },
        ".text-link-visited": {
          "@apply text-sea-900 dark:text-sea-200": {},
        },
        ".text-alert": {
          "@apply text-sun-800 dark:text-sun-500": {},
        },
        "text-disabled": {
          "@apply text-sumi-500 dark:text-sumi-600": {},
        },
        ".icon-label": {
          "@apply text-sumi-900 dark:text-white": {},
        },
        ".icon-active": {
          "@apply text-sea-800 dark:text-sea-300": {},
        },
        ".icon-alert": {
          "@apply text-sun-800 dark:text-sun-500": {},
        },
        ".icon-disabled": {
          "@apply text-sumi-500 dark:text-sumi-600": {},
        },
        ".button-border": {
          "@apply border-sea-800 dark:border-sea-300": {},
        },
        ".button-border-hover": {
          "@apply border-sea-800/[0.13] dark:border-sea-200/10": {},
        },
        ".button-border-active": {
          "@apply border-sea-800/[0.13] dark:border-sea-300/10": {},
        },
        ".button-bg": {
          "@apply bg-sea-800 dark:bg-sea-300": {},
        },
        ".button-bg-hover": {
          "@apply bg-sea-800/[0.13] dark:bg-sea-200/10": {},
        },
        ".button-bg-active": {
          "@apply bg-sea-800/[0.13] dark:bg-sea-300/10": {},
        },
        ".button-bg-disabled": {
          "@apply bg-sumi-500 dark:bg-sumi-500": {},
        },
        ".bg-primary": {
          "@apply bg-white dark:bg-sumi-900": {},
        },
        ".bg-secondary": {
          "@apply bg-sumi-100 dark:bg-sumi-700": {},
        },
        ".bg-tertiary": {
          "@apply bg-sumi-50 dark:bg-sumi-800": {},
        },
        ".border-field": {
          "@apply border-sumi-900 dark:border-white border": {},
        },
        ".border-divider": {
          "@apply border-sumi-300 dark:border-sumi-700 border": {},
        },
        ".border-focus": {
          "@apply border-wood-600 dark:border-wood-600 border-2": {},
        },
        ".border-selected": {
          "@apply border-sea-800 dark:border-sea-300 border-2": {},
        },
        ".border-alert": {
          "@apply border-sun-800 dark:border-sun-500 border-2": {},
        },
        ".border-disabled": {
          "@apply border-sumi-300 dark:border-sumi-300 border": {},
        },
        ".bg-success": {
          "@apply bg-forest-600 dark:bg-forest-600": {},
        },
        ".bg-alert": {
          "@apply bg-sun-800 dark:bg-sun-500": {},
        },
        ".bg-warning": {
          "@apply bg-wood-800 dark:bg-wood-500": {},
        },
        ".chart-text-primary": {
          "@apply text-sea-800 dark:text-sea-100": {},
        },
        ".chart-text-secondary": {
          "@apply text-sea-400 dark:text-sea-300": {},
        },
        ".chart-bg-primary": {
          "@apply bg-sea-800 dark:bg-sea-100": {},
        },
        ".chart-bg-secondary": {
          "@apply bg-sea-400 dark:bg-sea-300": {},
        },
      })
    },
  ],
}

export default tailwindConfig
