import { IconProps } from "@/types"

export function TransactionsOutlined({
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
      data-testid="transactions-outlined"
    >
      <g clipPath="url(#clip0_115_5621)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.72324 7.84648L7.92324 10.1465L6.92324 11.1465L2.82324 7.14648L6.92324 3.14648L7.92324 4.14648L5.72324 6.34648H21.9232V7.84648H5.72324ZM17.9248 13.1465L18.9248 12.1465L23.0248 16.1465L18.9248 20.1465L17.9248 19.1465L20.1248 16.8465H3.9248V15.3465H20.1248L17.9248 13.1465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5621">
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

export function TransactionsFilled({
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
      data-testid="transactions-filled"
    >
      <g clipPath="url(#clip0_115_5626)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.32637 8.14658L8.32637 10.1466L6.92637 11.5466L2.52637 7.14658L6.92637 2.74658L8.32637 4.14658L6.32637 6.14658H22.1264V8.14658H6.32637ZM17.5279 13.1466L18.9279 11.7466L23.3279 16.1466L18.9279 20.5466L17.5279 19.1466L19.5279 17.1466H3.62793V15.1466H19.5279L17.5279 13.1466Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5626">
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
