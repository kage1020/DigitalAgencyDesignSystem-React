import { IconProps } from "@/types"

export function DownloadOutlined({ className, size = 24, color }: IconProps) {
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
      data-testid="download-outlined"
    >
      <g clipPath="url(#clip0_115_5328)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.4463 9.14648L19.4463 10.1465L12.4463 17.2465L5.44629 10.1465L6.44629 9.14648L11.6463 14.3465V3.14648H13.1463V14.3465L18.4463 9.14648ZM3.44629 21.1465V19.6465H21.4463V21.1465H3.44629Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5328">
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

export function DownloadFilled({ className, size = 24, color }: IconProps) {
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
      data-testid="download-filled"
    >
      <g clipPath="url(#clip0_115_5333)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.4439 8.74629L19.8439 10.1463L12.4439 17.5463L5.04395 10.1463L6.44395 8.74629L11.4439 13.7463V2.94629H13.4439V13.7463L18.4439 8.74629ZM3.14551 19.3462H21.6455V21.3462H3.14551V19.3462Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_5333">
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
