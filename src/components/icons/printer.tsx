import { IconProps } from "@/types"

export function PrinterOutlined({
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
      data-testid="printer-outlined"
    >
      <g clipPath="url(#clip0_115_5579)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.1855 7.14648V3.14648H5.18555V7.14648H2.18555V17.1465H5.18555V21.1465H19.1855V17.1465H22.1855V7.14648H19.1855ZM6.68555 4.64648H17.6855V7.14648H6.68555V4.64648ZM17.6855 19.6465H6.68555V12.6465H17.6855V19.6465ZM20.6855 15.6465H19.1855V11.1465H5.18555V15.6465H3.68555V8.64648H20.6855V15.6465ZM8.18555 17.8467H16.1855V17.1467V16.8467H8.18555V17.8467ZM8.18555 14.4463H16.1855V15.4463H8.18555V14.4463Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5579">
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

export function PrinterFilled({
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
      data-testid="printer-filled"
    >
      <g clipPath="url(#clip0_115_5585)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.18555 3.14648H19.1855V6.34648H5.18555V3.14648ZM20.4855 17.1465H22.1855V7.64648H2.18555V17.1465H3.88555V10.8465H20.4855V17.1465ZM5.18555 21.1465H19.1855V12.1465H5.18555V21.1465ZM8.18555 14.6465H16.1855V15.6465H8.18555V14.6465ZM16.1855 18.6465H8.18555V17.6465H16.1855V18.6465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5585">
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
