import { IconProps } from "@/types"

export function LuggageOutlined({ className, size = 24, color }: IconProps) {
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
      data-testid="luggage-outlined"
    >
      <g clipPath="url(#clip0_115_5474)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5771 5.14648H19.5771V20.1465H16.9771C17.0771 20.3465 17.0771 20.4465 17.0771 20.6465C17.0771 21.4465 16.3771 22.1465 15.5771 22.1465C14.7771 22.1465 14.0771 21.4465 14.0771 20.6465C14.0771 20.4465 14.0771 20.3465 14.1771 20.1465H10.9771C11.0771 20.3465 11.0771 20.4465 11.0771 20.6465C11.0771 21.4465 10.3771 22.1465 9.57715 22.1465C8.77715 22.1465 8.07715 21.4465 8.07715 20.6465C8.07715 20.4465 8.07715 20.3465 8.17715 20.1465H5.57715V5.14648H9.57715V2.14648H15.5771V5.14648ZM14.0771 3.64648H11.0771V5.14648H14.0771V3.64648ZM7.07715 18.6465H18.0771V6.64648H7.07715V18.6465ZM9.77637 8.84668H10.7764V16.5467H9.77637V8.84668ZM12.0771 8.84668H13.0771V16.5467H12.0771V8.84668ZM15.2764 8.84668H14.2764V16.5467H15.2764V8.84668Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5474">
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

export function LuggageFilled({ className, size = 24, color }: IconProps) {
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
      data-testid="luggage-filled"
    >
      <g clipPath="url(#clip0_115_5481)">
        <path
          d="M15.5771 2.14648H9.57715V5.14648H5.57715V20.1465H8.17715C8.07715 20.3465 8.07715 20.4465 8.07715 20.6465C8.07715 21.4465 8.77715 22.1465 9.57715 22.1465C10.3771 22.1465 11.0771 21.4465 11.0771 20.6465C11.0771 20.4465 11.0771 20.3465 10.9771 20.1465H14.1771C14.0771 20.3465 14.0771 20.4465 14.0771 20.6465C14.0771 21.4465 14.7771 22.1465 15.5771 22.1465C16.3771 22.1465 17.0771 21.4465 17.0771 20.6465C17.0771 20.4465 17.0771 20.3465 16.9771 20.1465H19.5771V5.14648H15.5771V2.14648ZM10.0771 16.6465H9.07715V9.14648H10.0771V16.6465ZM13.0771 16.6465H12.0771V9.14648H13.0771V16.6465ZM14.0771 5.14648H11.0771V3.64648H14.0771V5.14648ZM16.0771 9.14648V16.6465H15.0771V9.14648H16.0771Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5481">
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
