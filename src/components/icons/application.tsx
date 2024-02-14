import { IconProps } from "@/types"

export function ApplicationOutlined({
  className,
  size = 24,
  color,
}: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      style={color ? { color: color } : undefined}
      viewBox="0 0 25 25"
      fill="none"
      data-testid="application-outlined"
    >
      <g clipPath="url(#clip0_115_5818)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.86035 2.14648H17.5604L20.8604 5.34648V22.1465H4.86035V2.14648ZM6.36035 3.64648V20.6465H19.3604V6.64648H16.3604V3.64648H6.36035ZM7.86035 11.1465H17.8604V12.6465H7.86035V11.1465ZM17.8604 8.14648H7.86035V9.64648H17.8604V8.14648ZM10.2588 15.3464L12.1588 17.0464L15.4588 14.0464L16.4588 15.2464L12.1588 19.1464L9.25879 16.4464L10.2588 15.3464Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5818">
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

export function ApplicationFilled({ className, size = 24, color }: IconProps) {
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
      data-testid="application-filled"
    >
      <g clipPath="url(#clip0_115_5825)">
        <path
          d="M4.86035 22.1465H20.8604V5.34648L17.5604 2.14648H4.86035V22.1465ZM12.1604 19.9465L9.26035 17.3465L10.1604 16.3465L12.1604 18.1465L15.4604 15.0465L16.3604 16.0465L12.1604 19.9465ZM16.7604 3.44648L19.7604 6.44648H16.7604V3.44648ZM7.86035 8.34648H17.8604V9.84648H7.86035V8.34648ZM7.86035 11.8465H17.8604V13.3465H7.86035V11.8465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5825">
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
