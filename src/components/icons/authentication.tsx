import { IconProps } from "@/types"

export function AuthenticationOutlined({
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
      data-testid="authentication-outlined"
    >
      <g clipPath="url(#clip0_115_5894)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5604 22.0465L12.8604 22.1465L13.1604 21.9465C18.5604 19.8465 21.8604 15.5465 21.8604 10.7465V5.04648L12.8604 2.14648L3.86035 5.04648V10.8465C3.86035 15.6465 7.16035 19.9465 12.5604 22.0465ZM5.36035 10.7465V6.14648L12.8604 3.74648L20.3604 6.14648V10.7465C20.3604 14.8465 17.4604 18.5465 12.8604 20.4465C8.26035 18.5465 5.36035 14.8465 5.36035 10.7465ZM7.86035 11.6465L11.8604 15.6465L17.8604 9.74648L16.7604 8.64648L11.8604 13.5465L8.96035 10.5465L7.86035 11.6465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5894">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.860352 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function AuthenticationFilled({
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
      data-testid="authentication-filled"
    >
      <g clipPath="url(#clip0_115_5899)">
        <path
          d="M12.8604 2.14648L3.86035 5.04648V10.7465C3.86035 15.5465 7.16035 19.8465 12.5604 21.9465L12.8604 22.1465L13.1604 22.0465C18.5604 19.9465 21.8604 15.6465 21.8604 10.8465V5.04648L12.8604 2.14648ZM11.8604 15.6465L7.86035 11.6465L8.96035 10.5465L11.9604 13.5465L16.8604 8.64648L17.8604 9.74648L11.8604 15.6465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5899">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.860352 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
