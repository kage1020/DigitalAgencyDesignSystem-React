import { IconProps } from "@/types"

export function MotherAndChildOutlined({
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
      data-testid="mother-and-child-outlined"
    >
      <g clipPath="url(#clip0_115_5693)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.8809 5.64648C15.8809 7.54648 14.2809 9.14648 12.3809 9.14648C10.4809 9.14648 8.88086 7.54648 8.88086 5.64648C8.88086 3.74648 10.4809 2.14648 12.3809 2.14648C14.2809 2.14648 15.8809 3.74648 15.8809 5.64648ZM14.3809 5.64648C14.3809 4.54648 13.4809 3.64648 12.3809 3.64648C11.2809 3.64648 10.3809 4.54648 10.3809 5.64648C10.3809 6.74648 11.2809 7.64648 12.3809 7.64648C13.4809 7.64648 14.3809 6.74648 14.3809 5.64648ZM14.3809 15.6465C14.3809 16.7511 13.4854 17.6465 12.3809 17.6465C11.2763 17.6465 10.3809 16.7511 10.3809 15.6465C10.3809 14.5419 11.2763 13.6465 12.3809 13.6465C13.4854 13.6465 14.3809 14.5419 14.3809 15.6465ZM12.3777 18.6465C10.6777 18.6465 9.27773 19.6465 8.67773 21.1465H16.0777C15.4777 19.6465 14.0777 18.6465 12.3777 18.6465ZM11.1793 12.0464C8.2793 12.0464 5.8793 14.4464 5.8793 17.3464H5.7793V21.1464H4.2793V17.3464C4.2793 13.5464 7.3793 10.5464 11.0793 10.5464H13.5793C17.3793 10.5464 20.3793 13.6464 20.3793 17.3464V21.1464H18.8793V17.3464C18.8793 14.4464 16.5793 12.0464 13.6793 12.0464H11.1793Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5693">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.380859 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function MotherAndChildFilled({
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
      data-testid="mother-and-child-filled"
    >
      <g clipPath="url(#clip0_115_5700)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.8809 5.64648C15.8809 7.57948 14.3139 9.14648 12.3809 9.14648C10.4479 9.14648 8.88086 7.57948 8.88086 5.64648C8.88086 3.71349 10.4479 2.14648 12.3809 2.14648C14.3139 2.14648 15.8809 3.71349 15.8809 5.64648ZM13.5793 10.5464C17.3793 10.5464 20.3793 13.6464 20.3793 17.3464V21.1464H15.9793C15.3793 19.6464 13.9793 18.6464 12.2793 18.6464C10.5793 18.6464 9.1793 19.6464 8.5793 21.1464H4.2793V17.3464C4.2793 13.5464 7.3793 10.5464 11.0793 10.5464H13.5793ZM10.3793 15.6464C10.3793 16.7464 11.2793 17.6464 12.3793 17.6464C13.4793 17.6464 14.3793 16.7464 14.3793 15.6464C14.3793 14.5464 13.4793 13.6464 12.3793 13.6464C11.2793 13.6464 10.3793 14.5464 10.3793 15.6464Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5700">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.380859 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
