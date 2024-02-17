import { IconProps } from "@/types"

export function StampOutlined({
  className,
  size = 24,
  color,
  ...props
}: IconProps) {
  if (size % 8 !== 0 && process.env.NODE_ENV === "development") {
    console.warn(`The size prop (${size}) should be a multiple of 8.`)
  }

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      style={color ? { color: color } : undefined}
      viewBox="0 0 25 25"
      fill="none"
      {...props}
      data-testid="stamp-outlined"
    >
      <g clipPath="url(#clip0_115_5417)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.3164 12.5708C19.4164 12.5708 20.3164 13.4708 20.3164 14.5708V19.0708H4.31641V14.5708C4.31641 13.4708 5.21641 12.5708 6.31641 12.5708H9.91641L8.61641 7.8708C8.01641 5.4708 9.81641 3.0708 12.3164 3.0708C14.8164 3.0708 16.7164 5.4708 16.0164 7.8708L14.7164 12.5708H18.3164ZM10.5164 5.4708C10.1164 6.0708 9.91641 6.7708 10.1164 7.4708L11.5164 12.5708H13.2164L14.5164 7.4708C14.7164 6.7708 14.5164 6.0708 14.1164 5.4708C13.7164 4.8708 13.0164 4.5708 12.3164 4.5708C11.6164 4.5708 10.9164 4.8708 10.5164 5.4708ZM18.8164 14.5708C18.8164 14.2708 18.6164 14.0708 18.3164 14.0708H6.31641C6.01641 14.0708 5.81641 14.2708 5.81641 14.5708V17.5708H18.8164V14.5708ZM2.81641 22.5708V21.0708H21.8164V22.5708H2.81641Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5417">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.316406 0.570801)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function StampFilled({
  className,
  size = 24,
  color,
  ...props
}: IconProps) {
  if (size % 8 !== 0 && process.env.NODE_ENV === "development") {
    console.warn(`The size prop (${size}) should be a multiple of 8.`)
  }

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      style={color ? { color: color } : undefined}
      viewBox="0 0 25 25"
      fill="none"
      {...props}
      data-testid="stamp-filled"
    >
      <g clipPath="url(#clip0_115_5422)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.3165 3.5708C14.7165 3.5708 16.4165 5.8708 15.8165 8.0708L14.8165 11.7708H9.81652L8.81652 8.0708C8.21652 5.8708 9.91652 3.5708 12.3165 3.5708ZM4.31641 15.0708V19.0708H20.3164V15.0708C20.3164 13.9708 19.4164 13.0708 18.3164 13.0708H6.31641C5.21641 13.0708 4.31641 13.9708 4.31641 15.0708ZM21.8164 21.0708H2.81641V22.5708H21.8164V21.0708Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5422">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.316406 0.570801)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
