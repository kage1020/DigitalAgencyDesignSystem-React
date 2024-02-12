import ThemeSwitcher from "@/components/ThemeSwitcher"
import { cn } from "@/libs/util"
import Button from "@/components/Button"

function App() {
  return (
    <div className="grid h-screen w-screen place-items-center dark:bg-sumi-900">
      <ThemeSwitcher />
      <div className={cn("flex justify-center gap-3")}>
        <Button>ボタン</Button>
      </div>
    </div>
  )
}

export default App
