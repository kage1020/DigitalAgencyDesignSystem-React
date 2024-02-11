import clsx, { ClassValue } from 'clsx';
import { TailwindMergeConfigExtension, extendTailwindMerge } from 'tailwind-merge';
import { createTV } from 'tailwind-variants';

const twMergeConfig: TailwindMergeConfigExtension = {
  override: {
    theme: {
      borderRadius: ['none', 'sm', 'md', 'lg', 'full'],
      colors: [
        'transparent',
        'current',
        'inherit',
        'initial',
        'white',
        'black',
        'blue',
        'light-blue',
        'cyan',
        'green',
        'lime',
        'yellow',
        'orange',
        'red',
        'magenta',
        'purple',
        'grey',
        'sea',
        'sumi',
        'forest',
        'wood',
        'sun',
      ],
      spacing: ['0', 'px', '0.25', '0.5', '1', '2', '3', '5', '8', '13', '21', '34', '55'],
    },
    classGroups: {
      aspect: [
        'aspect-auto',
        'aspect-video',
        'aspect-image',
        'aspect-square',
        'aspect-a4',
        'aspect-a5',
        'aspect-a6',
        'aspect-banner',
      ],
      'font-size': [
        'xxxs-mobile',
        'xxxs',
        'xxs-mobile',
        'xxs',
        'xs-mobile',
        'xs',
        's-mobile',
        's',
        'm-mobile',
        'm',
        'l-mobile',
        'l',
        'xl',
        'xxl',
        'base-l',
        'base-m',
        'label-l',
        'sup-l',
        'sup-m',
        'button',
      ],
      'font-weight': ['font-r', 'font-m', 'font-b'],
      tracking: ['tracking-s', 'tracking-m'],
      leading: ['leading-s', 'leading-m', 'leading-l'],
    },
  },
  extend: {
    classGroups: {
      'font-family': ['font-noto-sans', 'font-noto-sans-jp'],
      duration: ['duration-400'],
      'text-color': [
        'text-body',
        'text-description',
        'text-placeholder',
        'text-onfill',
        'text-link',
        'text-link-hover',
        'text-link-active',
        'text-link-visited',
        'text-alert',
        'text-disabled',
        'icon-label',
        'icon-active',
        'icon-alert',
        'icon-disabled',
        'chart-text-primary',
        'chart-text-secondary',
      ],
      'border-color': [
        'button-border',
        'button-border-hover',
        'button-border-active',
        'border-field',
        'border-divider',
        'border-focus',
        'border-selected',
        'border-alert',
        'border-disabled',
        'border-alert',
        'border-disabled',
      ],
      'bg-color': [
        'button-bg',
        'button-bg-hover',
        'button-bg-active',
        'button-bg-disabled',
        'bg-primary',
        'bg-secondary',
        'bg-tertiary',
        'bg-success',
        'bg-alert',
        'bg-warning',
        'chart-bg-primary',
        'chart-bg-secondary',
      ],
      'font-size': [
        'text-xxxs-mobile',
        'text-xxxs',
        'text-xxs-mobile',
        'text-xxs',
        'text-xs-mobile',
        'text-xs',
        'text-s-mobile',
        'text-s',
        'text-m-mobile',
        'text-m',
        'text-l-mobile',
        'text-l',
        'text-xl',
        'text-xxl',
        'text-base-l',
        'text-base-m',
        'text-label-l',
        'text-sup-l',
        'text-sup-m',
        'text-button',
      ],
      'max-h': ['max-h-fit', 'max-h-full'],
      'max-w': ['max-w-fit', 'max-w-full'],
      'min-h': ['min-h-fit', 'min-h-full'],
      'min-w': ['min-w-fit', 'min-w-full'],
    },
  },
};

const twMerge = extendTailwindMerge(twMergeConfig);

export function cn(...classNames: ClassValue[]) {
  return twMerge(clsx(classNames));
}

export const tv = createTV({
  twMergeConfig: {
    theme: twMergeConfig.override?.theme,
    classGroups: { ...twMergeConfig.override?.classGroups, ...twMergeConfig.extend?.classGroups },
    conflictingClassGroups: twMergeConfig.extend?.conflictingClassGroups,
    conflictingClassGroupModifiers: twMergeConfig.extend?.conflictingClassGroupModifiers,
  },
});