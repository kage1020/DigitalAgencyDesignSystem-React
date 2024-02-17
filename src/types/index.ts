import { ReactNode } from "react"

export type NotificationBadgeProps = {
  className?: string
  variant?: "dot" | "count"
  count?: number
  children?: ReactNode | ReactNode[]
}

export type ButtonProps = JSX.IntrinsicElements["button"] & {
  size?: "x-small" | "small" | "medium" | "large"
  variant?: "primary" | "secondary" | "tertiary"
}

export type BottomNavigationProps<T extends string> =
  JSX.IntrinsicElements["nav"] & {
    active?: T
  }

export type DrawerProps = {
  className?: string
  children?: ReactNode
  direction?: "left" | "right"
  fullWidth?: boolean
}

export type DrawerOverlayProps = {
  className?: string
}

export type DrawerContentProps = {
  className?: string
  children?: ReactNode
}

export type IconProps = Omit<JSX.IntrinsicElements["svg"], "children"> & {
  size?: number
  color?: string
}

export type ModalDialogProps = {
  className?: string
  children?: ReactNode
}

export type ModalDialogOverlayProps = {
  className?: string
}

export type ModalDialogContentProps = {
  className?: string
  children?: ReactNode
}

export type ModalDialogActionsProps = {
  className?: string
  children?: ReactNode
}

export type ScrollTopButtonProps = Omit<
  JSX.IntrinsicElements["button"],
  "children" | "disabled" | "type"
>

export type SelectorProps = JSX.IntrinsicElements["select"] & {
  label: string
  options: { value: string; label: string }[]
  supportText?: string
  errorText?: string
}

export type TextAreaProps = JSX.IntrinsicElements["textarea"] & {
  label: string
  supportText?: string
  errorText?: string
  maxLength?: number
}

export type TextFieldProps = JSX.IntrinsicElements["input"] & {
  label: string
  supportText?: string
  errorText?: string
}
