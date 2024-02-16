import { IconProps } from "@/types"

export function ChildOutlined({ className, size = 24, color }: IconProps) {
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
      data-testid="child-outlined"
    >
      <g clipPath="url(#clip0_115_5777)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.99023 12.1465C1.99023 6.64648 6.49023 2.14648 11.9902 2.14648C17.4902 2.14648 21.9902 6.64648 21.9902 12.1465C21.9902 17.6465 17.4902 22.1465 11.9902 22.1465C6.49023 22.1465 1.99023 17.6465 1.99023 12.1465ZM19.4902 8.14648C17.9902 5.44648 15.1902 3.64648 11.9902 3.64648C8.99023 3.64648 6.39023 5.24648 4.79023 7.54648C5.69023 7.94648 6.59023 8.14648 7.59023 8.14648C9.59023 8.14648 11.3902 7.44648 12.7902 6.04648C13.0902 5.74648 13.5902 5.74648 13.8902 6.04648C15.1902 7.34648 17.0902 8.14648 18.9902 8.14648H19.4902ZM3.49023 12.1465C3.49023 16.8465 7.29023 20.6465 11.9902 20.6465C16.6902 20.6465 20.4902 16.8465 20.4902 12.1465C20.4902 11.2465 20.3902 10.3465 20.0902 9.54648C19.7902 9.64648 19.3902 9.64648 18.9902 9.64648C16.8902 9.64648 14.8902 8.84648 13.2902 7.54648C11.6902 8.94648 9.69023 9.64648 7.59023 9.64648C6.39023 9.64648 5.19023 9.44648 4.09023 8.94648C3.69023 9.94648 3.49023 11.0465 3.49023 12.1465ZM9.5918 12.1465C9.5918 12.6988 9.14408 13.1465 8.5918 13.1465C8.03951 13.1465 7.5918 12.6988 7.5918 12.1465C7.5918 11.5942 8.03951 11.1465 8.5918 11.1465C9.14408 11.1465 9.5918 11.5942 9.5918 12.1465ZM15.4902 13.1465C16.0425 13.1465 16.4902 12.6988 16.4902 12.1465C16.4902 11.5942 16.0425 11.1465 15.4902 11.1465C14.9379 11.1465 14.4902 11.5942 14.4902 12.1465C14.4902 12.6988 14.9379 13.1465 15.4902 13.1465ZM8.38867 16.7464L9.48867 15.6464C10.7887 16.9464 13.1887 16.9464 14.3887 15.5464L15.4887 16.6464C14.5887 17.6464 13.2887 18.1464 11.9887 18.1464C10.6887 18.1464 9.38867 17.6464 8.38867 16.7464Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5777">
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

export function ChildFilled({ className, size = 24, color }: IconProps) {
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
      data-testid="child-filled"
    >
      <g clipPath="url(#clip0_115_5784)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.68867 8.24648C6.48867 8.24648 5.18867 7.84648 4.08867 7.34648C3.78867 7.24648 3.58867 7.14648 3.38867 7.04648C5.18867 4.14648 8.38867 2.14648 11.9887 2.14648C15.9887 2.14648 19.4887 4.54648 21.0887 8.04648C18.4887 8.74648 15.6887 8.04648 13.7887 6.14648C13.5887 5.94648 13.1887 5.94648 12.8887 6.14648C11.4887 7.44648 9.68867 8.24648 7.68867 8.24648ZM13.2902 7.44629C15.5902 9.44629 18.6902 10.0463 21.5902 9.24629C21.7902 10.1463 21.9902 11.1463 21.9902 12.1463C21.9902 17.6463 17.4902 22.1463 11.9902 22.1463C6.49023 22.1463 1.99023 17.6463 1.99023 12.1463C1.99023 10.7463 2.29023 9.34629 2.79023 8.14629C4.19023 9.04629 5.99023 9.54629 7.59023 9.54629C9.69023 9.54629 11.6902 8.84629 13.2902 7.44629ZM16.4902 12.1463C16.4902 11.5463 16.0902 11.1463 15.4902 11.1463C14.8902 11.1463 14.4902 11.5463 14.4902 12.1463C14.4902 12.7463 14.8902 13.1463 15.4902 13.1463C16.0902 13.1463 16.4902 12.7463 16.4902 12.1463ZM15.4902 16.5463L14.5902 15.6463C13.1902 17.0463 10.7902 17.0463 9.39023 15.6463L8.49023 16.5463C9.49023 17.4463 10.6902 17.9463 11.9902 17.9463C13.2902 17.9463 14.5902 17.4463 15.4902 16.5463ZM9.59023 12.1463C9.59023 11.5463 9.19023 11.1463 8.59023 11.1463C7.99023 11.1463 7.59023 11.5463 7.59023 12.1463C7.59023 12.7463 7.99023 13.1463 8.59023 13.1463C9.19023 13.1463 9.59023 12.7463 9.59023 12.1463Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5784">
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