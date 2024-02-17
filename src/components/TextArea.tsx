import { useState } from "react"
import { cn } from "@/libs/util"
import { TextAreaProps } from "@/types"

const countValueLength = (
  value: string | number | readonly string[] | undefined,
) => {
  if (!value) return 0
  if (typeof value === "number") return String(value).length
  if (typeof value === "string") return value.length
  if (Array.isArray(value))
    return value.reduce((acc, cur) => acc + String(cur).length, 0)
}

export default function TextField({
  className,
  label,
  value,
  supportText,
  errorText,
  required = false,
  disabled = false,
  maxLength = 0,
  onChange,
  ...props
}: TextAreaProps) {
  const [count, setCount] = useState(countValueLength(value))

  return (
    <label
      className={cn(
        "block space-y-1 text-grey-900 dark:text-grey-50",
        className,
      )}
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
      <textarea
        className={cn([
          "w-full rounded-sm border border-grey-900 bg-white px-2 py-[12px] text-base-l dark:border-grey-600 dark:bg-grey-700",
          "invalid:border-red-800 dark:invalid:border-red-500",
          "focus-visible:rounded-[12px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-700",
          "disabled:border-grey-420 disabled:bg-grey-50 dark:disabled:border-grey-700 dark:disabled:bg-grey-800 dark:disabled:text-grey-420",
          count > maxLength && "border-red-800 dark:border-red-500",
        ])}
        required={required}
        disabled={disabled}
        defaultValue={value}
        onChange={(e) => {
          console.log(e.currentTarget.value, e.currentTarget.value.length)
          setCount(e.currentTarget.value.length)
          if (onChange) {
            onChange(e)
          }
        }}
        {...props}
      />
      <div className="!mt-0">
        {maxLength > 0 && (
          <p className="text-right text-sup-l">
            {count}/{maxLength}
          </p>
        )}
        {errorText && <p className="text-sup-l text-red-800">{errorText}</p>}
      </div>
    </label>
  )
}
