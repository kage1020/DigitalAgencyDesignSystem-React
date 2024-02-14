import { IconProps } from "@/types"

export function HistoryOutlined({ className, size = 24, color }: IconProps) {
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
      data-testid="history-outlined"
    >
      <g clipPath="url(#clip0_115_5242)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.32109 5.34679C11.0211 2.04679 16.7211 2.44679 20.0211 6.14679C23.3211 9.94679 22.9211 15.6468 19.3211 18.8468C17.5211 20.4468 15.4211 21.1468 13.3211 21.1468C10.8211 21.1468 8.32109 20.1468 6.52109 18.1468L7.62109 17.1468C10.4211 20.2468 15.1211 20.5468 18.2211 17.7468C21.3211 14.9468 21.6211 10.2468 18.9211 7.14679C16.1211 4.04679 11.4211 3.74679 8.32109 6.54679C6.72109 7.94679 5.82109 10.0468 5.82109 12.1468L7.92109 9.94679L9.02109 11.0468L5.02109 15.0468L1.12109 11.0468L2.12109 10.0468L4.32109 12.0468C4.32109 9.54679 5.42109 7.04679 7.32109 5.34679ZM12.1211 12.8465V7.64648H13.6211V12.2465L16.8211 15.4465L15.8211 16.5465L12.1211 12.8465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5242">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.121094 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function HistoryFilled({ className, size = 24, color }: IconProps) {
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
      data-testid="history-filled"
    >
      <g clipPath="url(#clip0_115_5249)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.8227 2.9466C16.3227 3.0466 18.6227 4.2466 20.2227 6.0466C23.6227 9.8466 23.2227 15.7466 19.3227 19.0466C17.6227 20.5466 15.5227 21.3466 13.2227 21.3466C10.6227 21.3466 8.12266 20.2466 6.32266 18.2466L6.12266 18.0466L7.62266 16.7466L7.82266 16.9466C10.4227 19.9466 15.0227 20.1466 18.0227 17.5466C21.0227 14.9466 21.2227 10.3466 18.6227 7.3466C16.0227 4.3466 11.4227 4.1466 8.42266 6.7466C7.02266 7.9466 6.22266 9.6466 6.02266 11.5466L7.92266 9.6466L9.42266 11.0466L5.02266 15.3466L0.722656 11.0466L2.12266 9.6466L4.02266 11.5466C4.22266 9.1466 5.32266 6.8466 7.12266 5.2466C9.02266 3.5466 11.3227 2.7466 13.8227 2.9466ZM11.8242 12.9463V7.44629H13.8242V12.1463L17.2242 15.4463L15.8242 16.8463L11.8242 12.9463Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5249">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.121094 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
