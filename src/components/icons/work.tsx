import { IconProps } from "@/types"

export function WorkOutlined({ className, size = 24, color }: IconProps) {
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
      data-testid="work-outlined"
    >
      <g clipPath="url(#clip0_115_5752)">
        <path
          d="M17.1211 6.64648V3.64648H7.12109V6.64648H2.12109V20.6465H22.1211V6.64648H17.1211ZM8.62109 5.14648H15.6211V6.64648H8.62109V5.14648ZM20.6211 19.1465H3.62109V12.7465C5.52109 13.6465 7.52109 14.2465 9.62109 14.4465V16.6465H14.6211V14.4465C16.7211 14.1465 18.7211 13.6465 20.6211 12.7465V19.1465ZM13.1211 15.1465H11.1211V13.1465H13.1211V15.1465ZM20.6211 11.0465C18.7211 12.0465 16.7211 12.6465 14.6211 12.9465V11.6465H9.62109V12.9465C7.52109 12.6465 5.52109 12.0465 3.62109 11.0465V8.14648H20.6211V11.0465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5752">
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

export function WorkFilled({ className, size = 24, color }: IconProps) {
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
      data-testid="work-filled"
    >
      <g clipPath="url(#clip0_115_5755)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.1211 3.64648H7.12109V6.64648H2.12109V10.3465C4.42109 11.8465 6.92109 12.7465 9.62109 13.1465V11.7465H14.6211V13.1465C17.3211 12.7465 19.8211 11.8465 22.1211 10.3465V6.64648H17.1211V3.64648ZM15.6211 6.64648H8.62109V5.14648H15.6211V6.64648ZM21.3211 12.2467C19.2211 13.3467 16.9211 14.0467 14.6211 14.3467V16.6467H9.62109V14.3467C6.92109 14.0467 4.42109 13.1467 2.12109 11.8467V20.6467H22.1211V11.8467C22.0605 11.877 21.9908 11.9164 21.9147 11.9595L21.9147 11.9595C21.7394 12.0586 21.5303 12.177 21.3211 12.2467ZM10.9219 15.3463V12.9463H13.3219V15.3463H10.9219Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5755">
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
