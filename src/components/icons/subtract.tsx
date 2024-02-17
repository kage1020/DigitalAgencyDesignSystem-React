import { IconProps } from "@/types"

export function SubtractOutlined({
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
      data-testid="subtract-outlined"
    >
      <g clipPath="url(#clip0_2869_9440)">
        <path
          d="M21.1856 11.3467H3.18555V12.8467H21.1856V11.3467Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2869_9440">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.185547 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function SubtractFilled({
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
      data-testid="subtract-filled"
    >
      <g clipPath="url(#clip0_2869_9441)">
        <path
          d="M21.3863 11.1465L2.98633 11.1465V13.1465H21.3863V11.1465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2869_9441">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.185547 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
