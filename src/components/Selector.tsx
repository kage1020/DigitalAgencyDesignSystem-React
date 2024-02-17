import { ArrowDownFilled } from "@/components/icons"
import { cn } from "@/libs/util"
import { SelectorProps } from "@/types"
import { useState } from "react"

export default function Selector({
  className,
  name,
  label,
  options,
  supportText,
  errorText,
  required = false,
  disabled = false,
  ...props
}: SelectorProps) {
  const [selected, setSelected] = useState(false)

  if (options.length <= 5 && process.env.NODE_ENV === "development") {
    console.warn(
      "The number of options in the selector is less than 5. Consider using a radio button instead.",
    )
  }

  return (
    <label
      className={cn([
        "relative block space-y-1 text-grey-900 dark:text-grey-50",
        className,
      ])}
    >
      {label && (
        <p
          className={cn([
            "text-label-1 flex items-center space-x-1",
            disabled && "text-grey-420",
          ])}
        >
          <span>{label}</span>
          {required && <span className="text-sup-l text-red-800">必須</span>}
        </p>
      )}
      {supportText && (
        <p className={cn("text-sup-l", disabled && "text-grey-420")}>
          {supportText}
        </p>
      )}
      <div className="relative flex items-center justify-between after:pointer-events-none after:absolute after:right-4 after:z-10 after:h-2 after:w-2 after:rotate-45 after:border-b-2 after:border-r-2 after:content-['']">
        <select
          name={name}
          className="relative appearance-none rounded-sm border border-grey-900 py-[12px] pl-2 pr-5"
          required={required}
          disabled={disabled}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* <ArrowDownFilled size={16} className="absolute right-3" /> */}
      </div>
      {errorText && <p className="text-sup-l text-red-800">{errorText}</p>}
    </label>
  )
}
