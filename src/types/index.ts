export type ButtonProps = JSX.IntrinsicElements['button'] & {
  size?: 'x-small' | 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export type BottomNavigationProps<T extends string> = JSX.IntrinsicElements['nav'] & {
  active?: T;
};

export type IconProps = Omit<JSX.IntrinsicElements['svg'], 'children'> & {
  className?: string;
  size?: number;
  color?: string;
};

export type ScrollTopButtonProps = Omit<
  JSX.IntrinsicElements['button'],
  'children' | 'disabled' | 'type'
>;
