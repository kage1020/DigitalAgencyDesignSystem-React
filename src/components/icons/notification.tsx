import { IconProps } from "@/types"

export function NotificationOutlined({
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
      data-testid="notification-outlined"
    >
      <g clipPath="url(#clip0_115_5274)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.1855 9.64648C18.1855 12.7465 20.0855 16.2465 20.0855 16.2465L20.1855 16.4465V18.1465H4.18555V16.4465L4.28555 16.2465C4.28555 16.2465 6.18555 12.7465 6.18555 9.64648C6.18555 7.84648 6.98555 6.24648 8.18555 5.14648C8.68555 4.74648 9.18555 4.44648 9.78555 4.14648C9.83555 4.09648 9.91055 4.07148 9.98555 4.04648C10.0605 4.02148 10.1355 3.99648 10.1855 3.94648C10.2855 2.94648 11.0855 2.14648 12.1855 2.14648C13.2855 2.14648 14.0855 2.94648 14.1855 3.94648C14.2355 3.99648 14.3105 4.02148 14.3855 4.04648C14.4605 4.07148 14.5355 4.09648 14.5855 4.14648C15.1855 4.34648 15.6855 4.74648 16.1855 5.14648C17.3855 6.24648 18.1855 7.84648 18.1855 9.64648ZM7.68555 9.64648C7.68555 12.5465 6.28555 15.6465 5.78555 16.6465H18.5855C18.0855 15.6465 16.6855 12.5465 16.6855 9.64648C16.6855 8.94648 16.4855 8.24648 16.1855 7.64648C15.7855 6.74648 15.0855 6.04648 14.1855 5.64648C13.5855 5.34648 12.8855 5.14648 12.1855 5.14648C11.4855 5.14648 10.7855 5.34648 10.1855 5.64648C9.28555 6.04648 8.58555 6.74648 8.18555 7.64648C7.88555 8.24648 7.68555 8.94648 7.68555 9.64648ZM14.6855 19.6465C14.6855 21.0465 13.5855 22.1465 12.1855 22.1465C10.7855 22.1465 9.68555 21.0465 9.68555 19.6465H14.6855Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5274">
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

export function NotificationFilled({
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
      data-testid="notification-filled"
    >
      <g clipPath="url(#clip0_115_5279)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.0855 16.2465L20.1855 16.4465V18.1465H4.18555V16.4465L4.28555 16.2465C4.28555 16.2465 6.18555 12.7465 6.18555 9.64648C6.18555 7.84648 6.98555 6.24648 8.18555 5.14648C8.68555 4.74648 9.18555 4.44648 9.78555 4.14648C9.83555 4.09648 9.91055 4.07148 9.98555 4.04648C10.0605 4.02148 10.1355 3.99648 10.1855 3.94648C10.2855 2.94648 11.0855 2.14648 12.1855 2.14648C13.2855 2.14648 14.0855 2.94648 14.1855 3.94648C14.2355 3.99648 14.3105 4.02148 14.3855 4.04648C14.4605 4.07148 14.5355 4.09648 14.5855 4.14648C15.1855 4.34648 15.6855 4.74648 16.1855 5.14648C17.3855 6.24648 18.1855 7.84648 18.1855 9.64648C18.1855 12.7465 20.0855 16.2465 20.0855 16.2465ZM14.6855 19.6465C14.6855 21.0465 13.5855 22.1465 12.1855 22.1465C10.7855 22.1465 9.68555 21.0465 9.68555 19.6465H14.6855Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5279">
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
