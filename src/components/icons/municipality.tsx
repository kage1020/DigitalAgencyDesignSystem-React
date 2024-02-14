import { IconProps } from "@/types"

export function MunicipalityOutlined({
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
      data-testid="municipality-outlined"
    >
      <g clipPath="url(#clip0_115_5729)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.44629 2.14648V7.14648H9.94629V3.64648H20.9463V22.1465H22.4463V2.14648H8.44629ZM11.9463 5.64648H18.9463V7.14648H11.9463V5.64648ZM18.9463 8.64648H14.4463V10.1465H18.9463V8.64648ZM12.4463 20.1465V15.1465H7.44629V20.1465H12.4463ZM8.94629 16.6465H10.9463V18.6465H8.94629V16.6465ZM2.34629 16.5465L1.44629 15.3465L9.94629 8.64648L18.4463 15.3465L17.5463 16.5465L15.9463 15.3465V22.1465H14.4463V14.1465L9.94629 10.6465L5.44629 14.1465V22.1465H3.94629V15.2465L2.34629 16.5465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5729">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.446289 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function MunicipalityFilled({ className, size = 24, color }: IconProps) {
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
      data-testid="municipality-filled"
    >
      <g clipPath="url(#clip0_115_5737)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.9463 22.0465V19.6465L20.5463 15.0465L9.94629 6.74648L8.44629 7.94648V2.14648H22.4463V22.0465H16.9463ZM15.4463 10.1465H19.4463V8.64648H15.4463V10.1465ZM11.9463 6.64648H19.4463V5.14648H11.9463V6.64648ZM2.34629 16.5465L1.44629 15.3465L9.94629 8.64648L18.4463 15.2465L17.5463 16.4465L15.4463 14.8465V22.1465H4.44629V14.9465L2.34629 16.5465ZM8.44629 16.1465V19.1465H11.4463V16.1465H8.44629Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5737">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.446289 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
