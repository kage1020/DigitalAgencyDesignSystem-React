import { tv } from "../libs/util"
import { ButtonProps } from "@/types"

const style = tv({
  base: "rounded-sm focus:outline-2 focus:outline-offset-4 focus:outline-yellow-700 text-xxs-mobile",
  variants: {
    size: {
      "x-small": "min-w-[72px] h-7 py-[7px] px-1 text-xxxs my-1",
      small: "min-w-20 h-9 py-[6px] px-[12px] my-0.5",
      medium: "min-w-24 h-12 py-[12px] px-2",
      large: "min-w-[136px] p-2 h-14",
    },
    variant: {
      primary:
        "bg-blue-900 text-white hover:bg-blue-1000 active:bg-blue-1100 disabled:bg-black/30 disabled:text-white/30 dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 dark:disabled:bg-white/30",
      secondary:
        "border bg-white text-blue-900 border-blue-900 hover:border-blue-1000 hover:bg-blue-200 active:border-blue-1200 active:bg-blue-300 disabled:bg-white disabled:border-grey-420 disabled:text-grey-420 dark:bg-transparent dark:text-blue-200 dark:border-blue-200 dark:hover:border-blue-300 dark:hover:bg-blue-200/20 dark:active:border-blue-300 dark:active:bg-blue-300/20 dark:disabled:bg-transparent dark:disabled:border-grey-420 dark:disabled:text-grey-420",
      tertiary:
        "text-blue-900 underline hover:bg-blue-200 active:bg-blue-300 disabled:bg-transparent disabled:text-grey-420 dark:text-blue-200 dark:hover:bg-blue-200/10 dark:active:bg-blue-300/10 dark:disabled:bg-transparent dark:disabled:text-grey-420",
    },
  },
})

export default function Button({
  className,
  size = "large",
  variant = "primary",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={style({ size, variant, className })}
      type={type}
      {...props}
      data-testid="button"
    >
      {children}
    </button>
  )
}
