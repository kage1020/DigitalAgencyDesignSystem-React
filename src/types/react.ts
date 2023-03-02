import type { HTMLInputTypeAttribute, MouseEventHandler, ReactNode, RefObject } from 'react'

export interface Props {
  className?: string
  children?: ReactNode | ReactNode[]
}

export type ContainerProps = Props & {
  row?: boolean
}

export type ButtonProps = Props & {
  variant?: 'primary' | 'secondary' | 'tertiary'
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export interface CircleButtonBase {
  className?: string
  alt?: string
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export type CircleButtonVariant = 'prev' | 'next' | 'first' | 'last' | 'top' | 'text'

export type CircleButtonIconProps = CircleButtonBase & {
  variant: 'prev' | 'next' | 'first' | 'last' | 'top'
}

export type CircleButtonTextProps = CircleButtonBase & {
  variant: 'text'
  text: number
}

export type CircleButtonProps<T extends CircleButtonVariant> = T extends 'text'
  ? CircleButtonTextProps
  : CircleButtonIconProps

type DotBadgeProps = Props & {
  variant: 'dot'
}

type CountBadgeProps = Props & {
  variant: 'count'
  count: number
}

export type BadgeProps<T extends 'dot' | 'count'> = T extends 'dot'
  ? DotBadgeProps
  : CountBadgeProps

export interface InputBaseProps {
  className?: string
  name: string
  placeholder?: string
  value?: string
  required?: boolean
  disabled?: boolean
}

export type InputProps = InputBaseProps & {
  type?: HTMLInputTypeAttribute
}

export type TextFieldProps = InputProps & {
  label: string
  helperText?: string
  errorText?: string
}

export type TextAreaProps = InputBaseProps & {
  label: string
  helperText?: string
  errorText?: string
}

export interface SelectProps {
  className?: string
  name: string
  label: string
  options: string[]
  value?: string
  required?: boolean
  disabled?: boolean
  helperText?: string
  errorText?: string
}

export interface RadioProps {
  className?: string
  variant?: 'normal' | 'tile'
  name: string
  label: string
  options: string[]
  value?: string
  required?: boolean
  disabled?: boolean
  helperText?: string
  errorText?: string
}

export interface CheckboxProps {
  className?: string
  label: string
  options: Array<{
    name: string
    label: string
  }>
  values?: string[]
  required?: number
  disabled?: boolean
  helperText?: string
  errorText?: string
}

export interface DialogProps {
  className?: string
  dialogRef: RefObject<HTMLDialogElement>
  onClose: () => void
}

export interface PaginationProps {
  count: number
  page: number
  onChange: (page: number) => void
}

export interface BreadcrumbProps {
  className?: string
  links: Array<{
    label: string
    path: string
  }>
}
