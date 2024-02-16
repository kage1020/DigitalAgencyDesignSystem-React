import { cn } from "@/libs/util"
import { TextFieldProps } from "@/types"

export default function TextField({
  className,
  label,
  supportText,
  errorText,
  required = false,
  disabled = false,
  ...props
}: TextFieldProps) {
  return (
    <div className={cn("text-grey-900 dark:text-grey-50", className)}>
      <label className="block space-y-1">
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
        <input
          className={cn([
            "w-full rounded-sm border border-grey-900 bg-white px-2 py-[12px] text-base-l dark:border-grey-600 dark:bg-grey-700",
            "invalid:border-red-800 dark:invalid:border-red-500",
            "focus-visible:rounded-[12px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-700",
            "disabled:border-grey-420 disabled:bg-grey-50 dark:disabled:border-grey-700 dark:disabled:bg-grey-800 dark:disabled:text-grey-420",
          ])}
          required={required}
          disabled={disabled}
          {...props}
        />
        {errorText && <p className="text-sup-l text-red-800">{errorText}</p>}
      </label>
    </div>
  )
}
