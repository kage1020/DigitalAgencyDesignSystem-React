import clsx, { ClassValue } from "clsx"
import {
  extendTailwindMerge,
  TailwindMergeConfigExtension,
} from "tailwind-merge"
import { createTV } from "tailwind-variants"
import { tailwindConfig } from "../../tailwind.config"

const twMergeConfig: TailwindMergeConfigExtension = {
  override: {
    theme: {
      borderRadius: Object.keys(tailwindConfig.theme.borderRadius),
      colors: Object.keys(tailwindConfig.theme.colors),
      spacing: Object.keys(tailwindConfig.theme.spacing),
    },
    classGroups: {
      aspect: Object.keys(tailwindConfig.theme.aspectRatio).map(
        (k) => `aspect-${k}`,
      ),
      "font-size": Object.keys(tailwindConfig.theme.fontSize).map(
        (k) => `text-${k}`,
      ),
      "font-weight": Object.keys(tailwindConfig.theme.fontWeight).map(
        (k) => `font-${k}`,
      ),
      tracking: Object.keys(tailwindConfig.theme.letterSpacing).map(
        (k) => `tracking-${k}`,
      ),
      leading: Object.keys(tailwindConfig.theme.lineHeight).map(
        (k) => `leading-${k}`,
      ),
      w: Object.keys(tailwindConfig.theme.width).map((k) => `w-${k}`),
      h: Object.keys(tailwindConfig.theme.height).map((k) => `h-${k}`),
      inset: Object.keys(tailwindConfig.theme.inset).map((k) => `inset-${k}`),
    },
  },
  extend: {
    classGroups: {
      "font-family": Object.keys(tailwindConfig.theme.extend.fontFamily).map(
        (k) => `font-${k}`,
      ),
      duration: Object.keys(tailwindConfig.theme.extend.transitionDuration).map(
        (k) => `duration-${k}`,
      ),
      "text-color": [
        "text-body",
        "text-description",
        "text-placeholder",
        "text-onfill",
        "text-link",
        "text-link-hover",
        "text-link-active",
        "text-link-visited",
        "text-alert",
        "text-disabled",
        "icon-label",
        "icon-active",
        "icon-alert",
        "icon-disabled",
        "chart-text-primary",
        "chart-text-secondary",
      ],
      "border-color": [
        "button-border",
        "button-border-hover",
        "button-border-active",
        "border-field",
        "border-divider",
        "border-focus",
        "border-selected",
        "border-alert",
        "border-disabled",
        "border-alert",
        "border-disabled",
      ],
      "bg-color": [
        "button-bg",
        "button-bg-hover",
        "button-bg-active",
        "button-bg-disabled",
        "bg-primary",
        "bg-secondary",
        "bg-tertiary",
        "bg-success",
        "bg-alert",
        "bg-warning",
        "chart-bg-primary",
        "chart-bg-secondary",
      ],
      "font-size": [
        "text-xxxs-mobile",
        "text-xxxs",
        "text-xxs-mobile",
        "text-xxs",
        "text-xs-mobile",
        "text-xs",
        "text-s-mobile",
        "text-s",
        "text-m-mobile",
        "text-m",
        "text-l-mobile",
        "text-l",
        "text-xl",
        "text-xxl",
        "text-base-l",
        "text-base-m",
        "text-label-l",
        "text-sup-l",
        "text-sup-m",
        "text-button",
      ],
      "max-h": ["max-h-screen", "max-h-full"],
      "max-w": ["max-w-screen", "max-w-full"],
      "min-h": ["min-h-screen", "min-h-full"],
      "min-w": ["min-w-screen", "min-w-full"],
      "translate-x": ["translate-x-full"],
      "translate-y": ["translate-y-full"],
    },
  },
}

const twMerge = extendTailwindMerge(twMergeConfig)

export function cn(...classNames: ClassValue[]) {
  return twMerge(clsx(classNames))
}

export const tv = createTV({
  twMergeConfig: {
    theme: twMergeConfig.override?.theme,
    classGroups: {
      ...twMergeConfig.override?.classGroups,
      ...twMergeConfig.extend?.classGroups,
    },
    conflictingClassGroups: twMergeConfig.extend?.conflictingClassGroups,
    conflictingClassGroupModifiers:
      twMergeConfig.extend?.conflictingClassGroupModifiers,
  },
})
