import { IconProps } from "@/types"

export function ArrowDownOutlined({
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
      data-testid="arrow-down-outlined"
    >
      <g clipPath="url(#clip0_115_5389)">
        <path
          d="M12.9248 17.2465L3.9248 8.14648L4.9248 7.14648L12.9248 15.1465L20.9248 7.14648L21.9248 8.14648L12.9248 17.2465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5389">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.924805 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function ArrowDownFilled({
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
      data-testid="arrow-down-filled"
    >
      <g clipPath="url(#clip0_115_5392)">
        <path
          d="M20.9264 6.74658L12.9264 14.7466L4.92637 6.74658L3.52637 8.14658L12.9264 17.5466L22.3264 8.14658L20.9264 6.74658Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5392">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.924805 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
