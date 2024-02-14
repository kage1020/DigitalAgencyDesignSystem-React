import { IconProps } from "@/types"

export function ArrivalOutlined({ className, size = 24, color }: IconProps) {
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
      data-testid="arrival-outlined"
    >
      <g clipPath="url(#clip0_115_5540)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.551 11.0466C19.151 11.5466 19.651 12.1466 20.051 12.8466C20.4259 13.5964 20.098 13.907 19.9731 14.0253C19.9647 14.0333 19.9572 14.0403 19.951 14.0466C19.851 14.1466 19.651 14.1466 19.451 14.1466C18.951 14.1466 18.351 13.9466 18.251 13.8466L4.65098 8.84658C3.55098 8.44658 2.25098 7.44658 2.25098 5.94658V3.44658L3.75098 4.04658L4.45098 6.14658L8.25098 7.34658L8.85098 1.74658L10.851 2.64658L12.351 8.74658C14.651 9.44658 16.151 9.94658 16.451 10.0466C17.451 10.3466 17.851 10.5466 18.551 11.0466ZM9.25098 19.6465H22.251V21.1465H9.25098V19.6465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5540">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.250977 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function ArrivalFilled({ className, size = 24, color }: IconProps) {
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
      data-testid="arrival-filled"
    >
      <g clipPath="url(#clip0_115_5545)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.3518 14.3466C18.0518 14.2466 16.9518 13.8466 15.1518 13.1466C13.5518 12.5466 4.55176 9.04658 4.55176 8.94658C3.45176 8.54658 2.05176 7.44658 2.05176 5.84658V3.04658L3.95176 3.84658L4.65176 6.04658L8.05176 7.04658L8.65176 1.24658L11.0518 2.24658L12.5518 8.34658C13.9077 8.75925 14.7075 9.0329 15.3406 9.24949C15.7814 9.4003 16.1413 9.52344 16.5518 9.64658C18.3518 10.3466 19.6518 11.3466 20.2518 12.6466C20.6518 13.4466 20.3518 14.3466 19.3518 14.3466ZM8.9502 19.3467H22.4502V21.3467H8.9502V19.3467Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5545">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.250977 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
