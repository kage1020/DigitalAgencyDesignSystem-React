import { IconProps } from "@/types"

export function DocumentsOutlined({ className, size = 24, color }: IconProps) {
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
      data-testid="documents-outlined"
    >
      <g clipPath="url(#clip0_115_5592)">
        <path
          d="M12.1117 6.14648L10.1117 4.14648H2.51172V21.1465H22.5117V6.14648H12.1117ZM9.51172 5.64648L11.5117 7.64648H21.0117V10.6465H4.01172V5.64648H9.51172ZM4.01172 19.6465V12.1465H21.0117V19.6465H4.01172Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5592">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.511719 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function DocumentsFilled({ className, size = 24, color }: IconProps) {
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
      data-testid="documents-filled"
    >
      <g clipPath="url(#clip0_115_5595)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.1117 4.14648L12.1117 6.14648H22.5117V10.6465H2.51172V4.14648H10.1117ZM2.51172 12.1465H22.5117V21.1465H2.51172V12.1465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5595">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.511719 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
