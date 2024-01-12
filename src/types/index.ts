export type IconProps = Omit<JSX.IntrinsicElements['svg'], 'children'> & {
  className?: string;
  size?: number;
  color?: string;
};
