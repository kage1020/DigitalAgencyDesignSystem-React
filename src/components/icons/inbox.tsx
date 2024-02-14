import { IconProps } from "@/types"

export function InboxOutlined({ className, size = 24, color }: IconProps) {
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
      data-testid="inbox-outlined"
    >
      <g clipPath="url(#clip0_115_5790)">
        <path
          d="M2.77246 4.14648V20.1465H22.7725V4.14648H2.77246ZM21.1725 5.64648L12.7725 12.0465L4.37246 5.64648H21.1725ZM4.27246 18.6465V7.44648L12.7725 13.9465L21.2725 7.44648V18.6465H4.27246Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5790">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.772461 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function InboxFilled({ className, size = 24, color }: IconProps) {
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
      data-testid="inbox-filled"
    >
      <g clipPath="url(#clip0_115_5793)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.7725 12.6465L2.77246 4.64648H22.7725L12.7725 12.6465ZM2.77246 6.34668L12.7725 14.3467L22.7725 6.34668V19.6467H2.77246V6.34668Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5793">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.772461 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
