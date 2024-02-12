import Button from "@/components/Button"
import useTheme from "@/hooks/useTheme"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="absolute right-4 top-4">
      <Button
        className="min-w-0"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme}
      </Button>
    </div>
  )
}
