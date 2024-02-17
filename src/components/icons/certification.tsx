import { IconProps } from "@/types"

export function CertificationOutlined({
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
      data-testid="certification-outlined"
    >
      <g clipPath="url(#clip0_115_5882)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.4248 20.1465H2.4248V4.14648H23.4248V20.1465ZM3.9248 18.6465H21.9248V5.64648H3.9248V18.6465ZM9.9248 9.64648V14.6465H7.4248V9.64648H9.9248ZM11.4248 8.14648H5.9248V16.1465H10.5248H11.4248V8.14648ZM13.4248 8.14648H19.9248V9.64648H13.4248V8.14648ZM19.9248 11.3467H13.4248V12.8467H19.9248V11.3467ZM13.4248 14.6465H19.9248V16.1465H13.4248V14.6465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5882">
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

export function CertificationFilled({
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
      data-testid="certification-filled"
    >
      <g clipPath="url(#clip0_115_5890)">
        <path
          d="M2.4248 20.1465H23.4248V4.14648H2.4248V20.1465ZM13.4248 8.24648H19.9248V9.54648H13.4248V8.24648ZM13.4248 11.4465H19.9248V12.7465H13.4248V11.4465ZM13.4248 14.7465H19.9248V16.0465H13.4248V14.7465ZM5.9248 8.24648H11.4248V16.0465H10.5248H5.9248V8.24648Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5890">
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
