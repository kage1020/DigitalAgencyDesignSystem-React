import { IconProps } from "@/types"

export function PersonalComputerOutlined({
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
      data-testid="personal-computer-outlined"
    >
      <g clipPath="url(#clip0_115_5572)">
        <path
          d="M21.0557 16.6464V5.04639H3.05566V16.6464H10.5557V19.6464H7.55566V21.1464H16.5557V19.6464H13.5557V16.6464H21.0557ZM4.55566 6.54639H19.5557V15.1464H4.55566V6.54639Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5572">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.0556641 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function PersonalComputerFilled({
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
      data-testid="personal-computer-filled"
    >
      <g clipPath="url(#clip0_115_5575)">
        <path
          d="M3.05566 16.6464H10.5557V19.6464H7.55566V21.1464H16.5557V19.6464H13.5557V16.6464H21.0557V5.04639H3.05566V16.6464Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5575">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.0556641 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
