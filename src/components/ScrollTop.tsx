import { MdArrowUpward } from "@/components/icons"
import { ScrollTopButtonProps } from "@/types"
import { cn } from "@/libs/util"

export default function ScrollTopButton({
  className,
  ...props
}: ScrollTopButtonProps) {
  return (
    <button
      className={cn(
        "h-14 w-14 rounded-full border border-blue-900 bg-white p-2 text-blue-900 hover:border-blue-1000 hover:bg-blue-200 hover:text-blue-1000 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-700 active:border-blue-1200 active:bg-blue-300 active:text-blue-1200 disabled:border-yellow-700 dark:border-blue-200 dark:bg-transparent dark:text-blue-200 dark:hover:border-blue-300 dark:hover:bg-blue-200/20 dark:active:border-blue-300 dark:active:bg-blue-300/20",
        className,
      )}
      type="button"
      {...props}
      data-testid="scroll-top-button"
    >
      <MdArrowUpward className="mx-auto" />
    </button>
  )
}
