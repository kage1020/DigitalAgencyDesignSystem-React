import { IconProps } from "@/types"

export function SpecialistOutlined({
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
      data-testid="specialist-outlined"
    >
      <g clipPath="url(#clip0_115_5843)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.4463 2.14662C20.3463 1.44662 18.0463 1.44662 15.9463 2.04662C13.8463 1.44662 11.5463 1.54662 9.44629 2.14662L8.94629 2.34662V7.14662H10.4463V3.44662C12.0463 3.04662 13.6463 3.04662 15.2463 3.44662V10.6466C14.5463 10.4466 13.8463 10.3466 13.1463 10.3466V11.8466C14.0463 11.8466 14.9463 12.0466 15.7463 12.2466L15.9463 12.3466L16.1463 12.2466C18.0463 11.6466 20.0463 11.6466 21.9463 12.2466L22.9463 12.5466V2.34662L22.4463 2.14662ZM21.4463 10.6466C19.8463 10.3466 18.2463 10.3466 16.6463 10.6466V3.44662C18.2463 3.04662 19.8463 3.04662 21.4463 3.44662V10.6466ZM14.0479 22.1465H12.5479C12.5479 19.6465 10.5479 17.6465 8.04785 17.6465C5.54785 17.6465 3.54785 19.6465 3.54785 22.1465H2.04785C2.04785 18.8465 4.74785 16.1465 8.04785 16.1465C11.3479 16.1465 14.0479 18.8465 14.0479 22.1465ZM9.74473 11.8465C9.74473 10.9465 9.04473 10.1465 8.04473 10.1465C7.04473 10.1465 6.34473 10.9465 6.34473 11.8465C6.34473 12.7465 7.14473 13.5465 8.04473 13.5465C8.94473 13.5465 9.74473 12.7465 9.74473 11.8465ZM4.84473 11.8465C4.84473 10.1465 6.24473 8.64648 8.04473 8.64648C9.84473 8.64648 11.3447 10.1465 11.2447 11.8465C11.2447 13.5465 9.74473 15.0465 8.04473 15.0465C6.34473 15.0465 4.84473 13.6465 4.84473 11.8465Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5843">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.446289 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function SpecialistFilled({
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
      data-testid="specialist-filled"
    >
      <g clipPath="url(#clip0_115_5849)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.04395 7.64643C11.1439 8.04643 12.7439 9.94643 12.7439 12.1464C13.8439 12.1464 15.0439 12.2464 16.0439 12.6464C18.3439 11.8464 20.8439 12.0464 23.0439 12.8464V2.54643L22.5439 2.34643C20.4439 1.64643 18.1439 1.64643 16.0439 2.24643C13.7439 1.54643 11.3439 1.64643 9.04395 2.44643V7.64643ZM21.5439 10.9464C19.9439 10.6464 18.3439 10.6464 16.7439 10.9464V3.74643C18.3439 3.34643 19.9439 3.34643 21.5439 3.74643V10.9464ZM9.34551 16.5466C5.74551 15.7466 2.14551 18.6466 2.14551 22.4466H14.1455C14.1455 19.4466 12.1455 17.0466 9.34551 16.5466ZM11.4479 12.1463C11.4479 13.9136 10.0152 15.3463 8.24785 15.3463C6.48054 15.3463 5.04785 13.9136 5.04785 12.1463C5.04785 10.379 6.48054 8.94629 8.24785 8.94629C10.0152 8.94629 11.4479 10.379 11.4479 12.1463Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5849">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.446289 0.146484)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
