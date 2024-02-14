import { IconProps } from "@/types"

export function InvoiceOutlined({ className, size = 24, color }: IconProps) {
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
      data-testid="invoice-outlined"
    >
      <g clipPath="url(#clip0_115_5829)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.3604 4.74648L12.6604 2.14648H2.36035V18.1465H6.36035V16.6465H3.86035V3.64648H11.3604V6.14648H14.5604H15.3604V4.74648ZM9.96035 6.64648H5.36035V8.14648H9.96035V6.64648ZM5.36035 9.64648H7.86035V11.1465H5.36035V9.64648ZM17.2604 11.6465L15.6604 14.5465L13.9604 11.6465H12.8604L14.5604 14.6465H13.1604V15.6465H15.0604V16.6465H13.1604V17.6465H15.0604V19.1465H16.0604V17.6465H18.1604V16.6465H16.0604V15.6465H18.1604V14.6465H16.6604L18.3604 11.6465H17.2604ZM21.5596 15.1465C21.5596 11.8465 18.8596 9.14648 15.5596 9.14648C12.2596 9.14648 9.55957 11.8465 9.55957 15.1465C9.55957 18.4465 12.2596 21.1465 15.5596 21.1465C18.8596 21.1465 21.5596 18.4465 21.5596 15.1465ZM8.05957 15.1465C8.05957 11.0465 11.4596 7.64648 15.5596 7.64648C19.7596 7.64648 23.0596 11.0465 23.0596 15.1465C23.0596 19.2465 19.6596 22.6465 15.5596 22.6465C11.4596 22.6465 8.05957 19.2465 8.05957 15.1465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5829">
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

export function InvoiceFilled({ className, size = 24, color }: IconProps) {
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
      data-testid="invoice-filled"
    >
      <g clipPath="url(#clip0_115_5837)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.8604 4.74648V6.34648C10.3604 6.74648 6.76035 10.5465 6.86035 15.1465C6.86035 16.2465 7.06035 17.2465 7.36035 18.1465H2.36035V2.14648H12.1604L14.8604 4.74648ZM13.5604 5.64648L11.3604 3.44648V5.64648H13.5604ZM8.86035 5.84648H4.36035V7.14648H8.86035V5.84648ZM6.86035 8.84648H4.36035V10.1465H6.86035V8.84648ZM14.4596 7.74648C14.7596 7.64648 15.1596 7.64648 15.5596 7.64648C19.7596 7.64648 23.0596 11.0465 23.0596 15.1465C23.0596 19.2465 19.6596 22.6465 15.5596 22.6465C12.4596 22.6465 9.85957 20.8465 8.65957 18.1465C8.25957 17.2465 8.05957 16.2465 8.05957 15.1465C8.05957 11.3465 10.8596 8.24648 14.4596 7.74648ZM16.1596 15.6465H18.1596V14.6465H16.5596L18.2596 11.6465H17.1596L15.5596 14.5465L13.9596 11.6465H12.8596L14.5596 14.6465H13.1596V15.6465H15.1596V16.6465H13.1596V17.6465H15.1596V19.1465H16.1596V17.6465H18.1596V16.6465H16.1596V15.6465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5837">
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
