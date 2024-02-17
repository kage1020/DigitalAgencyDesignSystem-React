import { Meta } from "@storybook/react"
import { IconList } from "@/components/icons"
import { IconProps } from "@/types"

function Icons({ size, color }: Pick<IconProps, "size" | "color">) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(8rem, 1fr)",
        gap: "0.5rem",
      }}
    >
      {IconList.map((i) => (
        <div
          key={i.label}
          style={{
            display: "grid",
            gridTemplateRows: "subgrid",
            gridRow: "span 2",
            padding: "0.25rem",
            textAlign: "center",
          }}
        >
          <div style={{ display: "grid", placeItems: "center" }}>
            <i.icon size={size} color={color} />
          </div>
          <p style={{ margin: "0.25rem 0", wordBreak: "break-all" }}>
            {i.label}
          </p>
        </div>
      ))}
    </div>
  )
}

const meta: Meta = {
  title: "Components/Icons/Default",
  component: Icons,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "number", defaultValue: 48 },
    color: { control: "color", defaultValue: "currentColor" },
  },
}

export default meta

export const Preview = (args: Pick<IconProps, "size" | "color">) => (
  <Icons {...args} />
)
