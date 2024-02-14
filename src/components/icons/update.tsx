import { IconProps } from "@/types"

export function UpdateOutlined({ className, size = 24, color }: IconProps) {
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
      data-testid="update-outlined"
    >
      <g clipPath="url(#clip0_115_5350)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.8164 13.8465L22.8164 11.8465L23.8164 12.8465L20.0164 16.6465L16.2164 12.8465L17.3164 11.7465L19.3164 13.7465V11.8465C19.3164 7.84648 16.2164 4.54648 12.4164 4.54648C11.6164 4.54648 10.8164 4.74648 10.0164 5.04648L9.51641 3.64648C10.5164 3.34648 11.4164 3.14648 12.4164 3.14648C17.1164 3.14648 20.8164 7.04648 20.8164 11.9465V13.8465ZM5.41641 11.8465C5.41641 15.8465 8.51641 19.1465 12.3164 19.1465C12.8497 19.1465 13.3831 19.0576 13.9164 18.9687C14.1831 18.9243 14.4497 18.8798 14.7164 18.8465L15.2164 20.2465C14.2164 20.5465 13.3164 20.7465 12.3164 20.7465C7.71641 20.7465 3.91641 16.7465 3.91641 11.9465V10.5465L1.91641 12.5465L0.816406 11.4465L4.61641 7.64648L8.51641 11.3465L7.41641 12.4465L5.41641 10.4465V11.8465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5350">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.316406 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function UpdateFilled({ className, size = 24, color }: IconProps) {
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
      data-testid="update-filled"
    >
      <g clipPath="url(#clip0_115_5355)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7148 13.4463L22.4148 11.7463L23.9148 13.1463L19.8148 17.2463L15.7148 13.1463L17.1148 11.7463L18.8148 13.4463V12.1463C18.8148 8.34629 15.9148 5.34629 12.3148 5.34629C11.6148 5.34629 10.8148 5.44629 10.1148 5.74629L9.91484 5.84629L9.21484 4.04629L9.41484 3.94629C10.4148 3.64629 11.3148 3.44629 12.3148 3.44629C16.9148 3.44629 20.7148 7.34629 20.7148 12.1463V13.4463ZM12.3148 18.9465C13.0148 18.9465 13.8148 18.8465 14.5148 18.5465L14.6148 18.4465L15.3148 20.2465L15.1148 20.3465C14.1148 20.6465 13.2148 20.8465 12.2148 20.8465C7.61484 20.8465 3.81484 16.9465 3.81484 12.1465V11.4465L2.11484 13.1465L0.714844 11.7465L4.81484 7.64648L8.91484 11.6465L7.51484 13.0465L5.81484 11.3465V12.1465C5.81484 15.9465 8.71484 18.9465 12.3148 18.9465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5355">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.316406 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
