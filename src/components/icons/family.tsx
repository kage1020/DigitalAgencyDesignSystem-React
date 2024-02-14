import { IconProps } from "@/types"

export function FamilyOutlined({ className, size = 24, color }: IconProps) {
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
      data-testid="family-outlined"
    >
      <g clipPath="url(#clip0_115_5762)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0549 5.14648C10.0549 6.74648 8.75488 8.04648 7.15488 8.04648C5.55488 8.04648 4.25488 6.64648 4.25488 5.04648C4.25488 3.44648 5.45488 2.14648 7.15488 2.14648C8.85488 2.14648 10.0549 3.54648 10.0549 5.14648ZM8.55488 5.04648C8.55488 4.24648 7.95488 3.64648 7.15488 3.64648C6.35488 3.64648 5.75488 4.24648 5.75488 5.04648C5.75488 5.84648 6.35488 6.54648 7.15488 6.54648C7.95488 6.54648 8.55488 5.84648 8.55488 5.04648ZM22.5541 13.8464C22.5541 11.2464 20.4541 9.04639 17.7541 9.04639H16.0541C14.3541 9.04639 12.9541 9.94639 12.0541 11.2464C11.2541 9.94639 9.7541 9.04639 8.0541 9.04639H6.2541C3.6541 9.04639 1.4541 11.1464 1.4541 13.8464V21.1464H3.0541V13.8464C3.0541 12.0464 4.5541 10.6464 6.2541 10.6464H8.0541C9.4541 10.6464 10.6541 11.5464 11.0541 12.7464H13.0541C13.5541 11.5464 14.6541 10.6464 16.0541 10.6464H17.8541C19.6541 10.6464 21.0541 12.1464 21.0541 13.8464V21.1464H22.5541V13.8464ZM12.0525 18.6465C10.3525 18.6465 8.95254 19.6465 8.35254 21.1465H15.7525C15.1525 19.6465 13.7525 18.6465 12.0525 18.6465ZM16.9557 8.04648C18.5557 8.04648 19.8557 6.74648 19.8557 5.14648C19.8557 3.54648 18.5557 2.14648 16.9557 2.14648C15.3557 2.14648 14.0557 3.44648 14.0557 5.04648C14.0557 6.64648 15.2557 8.04648 16.9557 8.04648ZM16.9557 3.64648C17.7557 3.64648 18.3557 4.24648 18.3557 5.04648C18.3557 5.84648 17.7557 6.44648 16.9557 6.44648C16.1557 6.44648 15.5557 5.84648 15.5557 5.04648C15.5557 4.24648 16.1557 3.64648 16.9557 3.64648ZM14.0557 15.6465C14.0557 16.7511 13.1602 17.6465 12.0557 17.6465C10.9511 17.6465 10.0557 16.7511 10.0557 15.6465C10.0557 14.5419 10.9511 13.6465 12.0557 13.6465C13.1602 13.6465 14.0557 14.5419 14.0557 15.6465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5762">
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

export function FamilyFilled({ className, size = 24, color }: IconProps) {
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
      data-testid="family-filled"
    >
      <g clipPath="url(#clip0_115_5770)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.15488 7.94648C8.75651 7.94648 10.0549 6.64811 10.0549 5.04648C10.0549 3.44486 8.75651 2.14648 7.15488 2.14648C5.55326 2.14648 4.25488 3.44486 4.25488 5.04648C4.25488 6.64811 5.55326 7.94648 7.15488 7.94648ZM22.5541 21.1464V13.8464C22.5541 11.2464 20.4541 9.04639 17.7541 9.04639H16.0541C14.3541 9.04639 12.9541 9.94639 12.0541 11.2464C11.2541 9.94639 9.7541 9.04639 8.0541 9.04639H6.2541C3.6541 9.04639 1.4541 11.1464 1.4541 13.8464V21.1464H8.3541C8.9541 19.6464 10.3541 18.6464 12.0541 18.6464C13.7541 18.6464 15.1541 19.6464 15.7541 21.1464H22.5541ZM11.2541 13.4464C11.7541 13.2464 12.3541 13.2464 12.7541 13.4464C13.4541 13.7464 13.9541 14.4464 13.9541 15.2464C13.9541 16.3464 13.0541 17.2464 11.9541 17.2464C10.8541 17.2464 9.9541 16.3464 9.9541 15.2464C10.0541 14.5464 10.5541 13.7464 11.2541 13.4464ZM16.9557 2.14648C18.5557 2.14648 19.8557 3.44648 19.8557 5.04648C19.8557 6.74648 18.5557 8.04648 16.9557 7.94648C15.3557 7.94648 14.0557 6.64648 14.0557 5.04648C14.0557 3.44648 15.3557 2.14648 16.9557 2.14648Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5770">
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
