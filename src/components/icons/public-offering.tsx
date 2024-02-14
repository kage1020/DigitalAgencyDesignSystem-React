import { IconProps } from "@/types"

export function PublicOfferingOutlined({
  className,
  size = 24,
  color,
}: IconProps) {
  if (size % 8 !== 0) {
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
      data-testid="public-offering-outlined"
    >
      <g clipPath="url(#clip0_115_5441)">
        <path
          d="M5.18555 22.5708H3.68555V3.0708L22.1855 10.0708L5.18555 17.0708V22.5708ZM5.18555 5.2708V15.4708L18.0855 10.1708L5.18555 5.2708Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5441">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.185547 0.570801)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function PublicOfferingFilled({
  className,
  size = 24,
  color,
}: IconProps) {
  if (size % 8 !== 0) {
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
      data-testid="public-offering-filled"
    >
      <g clipPath="url(#clip0_115_5444)">
        <path
          d="M5.18555 22.5708H3.68555V3.0708L22.1855 10.0708L5.18555 17.0708V22.5708Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5444">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.185547 0.570801)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
