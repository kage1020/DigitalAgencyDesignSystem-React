import { IconProps } from "@/types"

export function LawsOutlined({
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
      data-testid="laws-outlined"
    >
      <g clipPath="url(#clip0_115_5448)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.4219 9.9708L17.5219 11.0708L20.3219 8.2708L14.7219 2.5708L11.9219 5.3708L12.9219 6.4708L14.7219 4.6708L18.2219 8.2708L16.4219 9.9708ZM9.79688 7.50879L10.8575 6.44814L22.1711 17.7617L21.1105 18.8224L9.79688 7.50879ZM3.12109 20.0708H16.1211V21.5708H3.12109V20.0708ZM11.5203 17.0708L5.82031 11.3708L8.72031 8.5708L9.72031 9.6708L8.02031 11.3708L11.5203 14.8708L13.3203 13.1708L14.3203 14.2708L11.5203 17.0708Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5448">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.121094 0.570801)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function LawsFilled({
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
      data-testid="laws-filled"
    >
      <g clipPath="url(#clip0_115_5455)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9219 5.3708L14.7219 2.5708L20.3219 8.2708L17.5219 11.0708L11.9219 5.3708ZM9.79688 7.50879L10.8575 6.44814L22.1711 17.7617L21.1105 18.8224L9.79688 7.50879ZM3.12109 20.0708H16.1211V21.5708H3.12109V20.0708ZM8.72031 8.5708L5.82031 11.3708L11.5203 17.0708L14.3203 14.2708L8.72031 8.5708Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5455">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.121094 0.570801)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
