import { IconProps } from "@/types"

export function PrivacyProtectionOutlined({
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
      data-testid="privacy-protection-outlined"
    >
      <g clipPath="url(#clip0_115_5680)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.0557 7.14648V5.84648C20.0557 4.34648 18.8557 3.14648 17.2557 3.14648C15.6557 3.14648 14.5557 4.34648 14.5557 5.84648V7.14648H12.5557V14.1465H13.0557H22.0557V7.14648H20.0557ZM16.0557 5.84648C16.0557 5.14648 16.6557 4.54648 17.2557 4.54648C17.8557 4.54648 18.4557 5.14648 18.4557 5.84648V7.14648H16.0557V5.84648ZM20.5557 12.6465H14.0557V8.64648H20.5557V12.6465ZM11.9572 18.1465C10.8572 16.9465 9.25723 16.1465 7.55723 16.1465C5.85723 16.1465 4.25723 16.9465 3.15723 18.1465C2.15723 19.2465 1.65723 20.6465 1.65723 22.1465H3.05723C3.05723 20.3465 4.05723 18.8465 5.55723 18.1465C6.15723 17.8465 6.85723 17.6465 7.55723 17.6465C8.25723 17.6465 8.95723 17.8465 9.55723 18.1465C11.0572 18.8465 12.0572 20.3465 12.0572 22.1465H13.5572C13.5572 20.6465 12.9572 19.2465 11.9572 18.1465ZM4.35645 11.8465C4.35645 10.1465 5.75644 8.64648 7.55645 8.64648C9.35645 8.64648 10.7564 10.2465 10.7564 11.9465C10.7564 13.6465 9.35645 15.1465 7.55645 15.1465C5.75644 15.1465 4.35645 13.5465 4.35645 11.8465ZM5.75644 11.8465C5.75644 12.8465 6.55645 13.6465 7.55645 13.6465C8.55645 13.6465 9.35645 12.9465 9.35645 11.9465C9.35645 10.9465 8.55645 10.1465 7.55645 10.1465C6.55645 10.1465 5.75644 10.8465 5.75644 11.8465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5680">
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

export function PrivacyProtectionFilled({
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
      data-testid="privacy-protection-filled"
    >
      <g clipPath="url(#clip0_115_5686)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.0557 14.1465V7.14648H20.0557V5.84648C20.0557 4.34648 18.8557 3.14648 17.2557 3.14648C15.6557 3.14648 14.5557 4.34648 14.5557 5.84648V7.14648H12.5557V14.1465H22.0557ZM16.0557 5.84648C16.0557 5.14648 16.6557 4.54648 17.2557 4.54648C17.8557 4.54648 18.4557 5.14648 18.4557 5.84648V7.14648H16.0557V5.84648ZM13.5549 22.1465C13.5549 20.6465 12.9549 19.2465 12.0549 18.1465C10.9549 16.9465 9.35488 16.1465 7.65488 16.1465C5.95488 16.1465 4.35488 16.9465 3.25488 18.1465C2.25488 19.2465 1.75488 20.6465 1.75488 22.1465H13.5549ZM4.35645 11.8465C4.35645 10.1465 5.75644 8.64648 7.55645 8.64648C9.35645 8.64648 10.7564 10.2465 10.7564 11.9465C10.7564 13.6465 9.35645 15.1465 7.55645 15.1465C5.75644 15.1465 4.35645 13.5465 4.35645 11.8465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5686">
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
