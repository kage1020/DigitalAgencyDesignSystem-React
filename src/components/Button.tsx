import { tv, cn } from "@/libs/util"
import { ButtonProps } from "@/types"

const style = tv({
  base: "rounded-sm text-xxs-mobile focus-visible:rounded-[12px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-700",
  variants: {
    size: {
      "x-small": "my-1 h-7 min-w-[72px] px-1 py-[7px] text-xxxs",
      small: "my-0.5 h-9 min-w-20 px-[12px] py-[6px]",
      medium: "h-12 min-w-24 px-2 py-[12px]",
      large: "h-14 min-w-[136px] p-2",
    },
    variant: {
      primary: cn([
        "bg-blue-900 text-white dark:bg-blue-600",
        "hover:bg-blue-1000 dark:hover:bg-blue-700",
        "active:bg-blue-1100 dark:active:bg-blue-800",
        "disabled:bg-grey-420 dark:disabled:bg-grey-536",
      ]),
      secondary: cn([
        "border border-blue-900 bg-white text-blue-900 dark:border-blue-200 dark:bg-transparent dark:text-blue-200",
        "hover:border-blue-1000 hover:bg-blue-200 hover:text-blue-1000 dark:hover:border-blue-300 dark:hover:bg-blue-300/20 dark:hover:text-blue-300",
        "active:border-blue-1100 active:bg-blue-300 active:text-blue-1100 dark:active:border-blue-400 dark:active:bg-blue-400/20 dark:active:text-blue-400",
        "disabled:border-grey-420 disabled:bg-white disabled:text-grey-420 dark:disabled:border-grey-536 dark:disabled:bg-transparent dark:disabled:text-grey-536",
      ]),
      tertiary: cn([
        "text-blue-900 underline dark:text-blue-200",
        "hover:bg-blue-200 hover:text-blue-1000 dark:hover:bg-blue-300/20 dark:hover:text-blue-300",
        "active:bg-blue-300 active:text-blue-1100 dark:active:bg-blue-400/20 dark:active:text-blue-400",
        "disabled:bg-transparent disabled:text-grey-420 dark:disabled:bg-transparent dark:disabled:text-grey-536",
      ]),
    },
  },
})

export default function Button({
  className,
  size = "large",
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={style({ size, variant, className })}
      {...props}
      data-testid="button"
    >
      {children}
    </button>
  )
}
