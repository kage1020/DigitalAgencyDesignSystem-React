import { IconProps } from "@/types"

export function MenuOutlined({ className, size = 24, color }: IconProps) {
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
      data-testid="menu-outlined"
    >
      <g clipPath="url(#clip0_115_5315)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.5117 5.64648H3.51172V7.14648H21.5117V5.64648ZM21.5117 11.4463H3.51172V12.9463H21.5117V11.4463ZM3.51172 17.1465H21.5117V18.6465H3.51172V17.1465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5315">
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

export function MenuFilled({ className, size = 24, color }: IconProps) {
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
      data-testid="menu-filled"
    >
      <g clipPath="url(#clip0_115_5321)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.7109 5.44629H3.21094V7.44629H21.7109V5.44629ZM21.7109 11.1465H3.21094V13.1465H21.7109V11.1465ZM3.21094 16.8462H21.7109V18.8462H3.21094V16.8462Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5321">
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
