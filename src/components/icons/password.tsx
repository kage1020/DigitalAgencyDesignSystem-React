import { IconProps } from "@/types"

export function PasswordOutlined({
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
      data-testid="password-outlined"
    >
      <g clipPath="url(#clip0_115_5867)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.9902 8.14648H18.4902V17.1465H5.49023V8.14648H14.4902V6.14648C14.4902 4.74648 13.3902 3.64648 11.9902 3.64648C10.5902 3.64648 9.49023 4.74648 9.49023 6.14648V6.64648H7.99023V6.14648C7.99023 3.94648 9.79023 2.14648 11.9902 2.14648C14.1902 2.14648 15.9902 3.94648 15.9902 6.14648V8.14648ZM6.99023 9.64648V15.6465H16.9902V9.64648H6.99023ZM7.49023 20.6465C7.49023 21.4749 6.81866 22.1465 5.99023 22.1465C5.16181 22.1465 4.49023 21.4749 4.49023 20.6465C4.49023 19.8181 5.16181 19.1465 5.99023 19.1465C6.81866 19.1465 7.49023 19.8181 7.49023 20.6465ZM10.4902 20.6465C10.4902 19.8465 11.1902 19.1465 11.9902 19.1465C12.7902 19.1465 13.4902 19.8465 13.4902 20.6465C13.4902 21.4465 12.7902 22.1465 11.9902 22.1465C11.1902 22.1465 10.4902 21.4465 10.4902 20.6465ZM17.9902 22.1465C18.8187 22.1465 19.4902 21.4749 19.4902 20.6465C19.4902 19.8181 18.8187 19.1465 17.9902 19.1465C17.1618 19.1465 16.4902 19.8181 16.4902 20.6465C16.4902 21.4749 17.1618 22.1465 17.9902 22.1465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5867">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(-0.00976562 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function PasswordFilled({
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
      data-testid="password-filled"
    >
      <g clipPath="url(#clip0_115_5874)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.9902 8.14648H18.4902V17.1465H5.49023V8.14648H14.4902V6.14648C14.4902 4.74648 13.3902 3.64648 11.9902 3.64648C10.5902 3.64648 9.49023 4.74648 9.49023 6.14648V6.64648H7.99023V6.14648C7.99023 3.94648 9.79023 2.14648 11.9902 2.14648C14.1902 2.14648 15.9902 3.94648 15.9902 6.14648V8.14648ZM7.49023 20.6465C7.49023 21.4749 6.81866 22.1465 5.99023 22.1465C5.16181 22.1465 4.49023 21.4749 4.49023 20.6465C4.49023 19.8181 5.16181 19.1465 5.99023 19.1465C6.81866 19.1465 7.49023 19.8181 7.49023 20.6465ZM10.4902 20.6465C10.4902 19.8465 11.1902 19.1465 11.9902 19.1465C12.7902 19.1465 13.4902 19.8465 13.4902 20.6465C13.4902 21.4465 12.7902 22.1465 11.9902 22.1465C11.1902 22.1465 10.4902 21.4465 10.4902 20.6465ZM17.9902 22.1465C18.8187 22.1465 19.4902 21.4749 19.4902 20.6465C19.4902 19.8181 18.8187 19.1465 17.9902 19.1465C17.1618 19.1465 16.4902 19.8181 16.4902 20.6465C16.4902 21.4749 17.1618 22.1465 17.9902 22.1465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5874">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(-0.00976562 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
