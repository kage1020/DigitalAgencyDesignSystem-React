import { IconProps } from "@/types"

export function BankAccountOutlined({
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
      data-testid="bank-account-outlined"
    >
      <g clipPath="url(#clip0_115_5660)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.57715 17.3465V4.14648H22.5771V17.3465C22.5771 18.9465 21.2771 20.1465 19.7771 20.1465H5.27715C3.77715 20.1465 2.57715 18.9465 2.57715 17.3465ZM21.0771 7.14648V5.64648H4.07715V7.14648H21.0771ZM5.27715 18.6465H19.7771C20.4771 18.6465 21.0771 18.0465 21.0771 17.4465V8.64648H4.07715V17.4465C4.07715 18.0465 4.57715 18.6465 5.27715 18.6465ZM12.5764 12.5465L14.1764 9.64648H15.3764L13.6764 12.6465H15.0764V13.6465H13.0764V14.6465H15.0764V15.6465H13.0764V17.1465H12.0764V15.6465H10.0764V14.6465H12.0764V13.6465H10.0764V12.6465H11.4764L9.77637 9.64648H10.9764L12.5764 12.5465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5660">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.577148 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function BankAccountFilled({ className, size = 24, color }: IconProps) {
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
      data-testid="bank-account-filled"
    >
      <g clipPath="url(#clip0_115_5665)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.57715 4.14648H22.5771V7.14648H2.57715V4.14648ZM2.57715 17.4465V8.64648H22.5771V17.3465C22.5771 18.9465 21.2771 20.1465 19.7771 20.1465H5.27715C3.77715 20.1465 2.57715 18.9465 2.57715 17.4465ZM12.5771 13.5465L10.9771 10.6465H9.67715L11.3771 13.6465H9.97715V14.6465H11.9771V15.6465H9.97715V16.6465H11.9771V18.1465H12.9771V16.6465H14.9771V15.6465H12.9771V14.6465H14.9771V13.6465H13.5771L15.2771 10.6465H14.1771L12.5771 13.5465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5665">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.577148 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
