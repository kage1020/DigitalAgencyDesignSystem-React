import ThemeSwitcher from "@/components/ThemeSwitcher"
import Button from "@/components/Button"
import ScrollTop from "@/components/ScrollTop"

function App() {
  return (
    <>
      <ThemeSwitcher />
      <div className="flex h-screen w-screen flex-col place-items-center justify-center bg-grey-50 font-noto-sans-jp dark:bg-grey-900 dark:text-white">
        {/* <div className="grid grid-cols-4 gap-3 p-3">
          <p className="flex items-center justify-center"></p>
          <p className="flex items-center justify-center">Primary</p>
          <p className="flex items-center justify-center">Secondary</p>
          <p className="flex items-center justify-center">Tertiary</p>
          <p className="flex items-center justify-center">Default</p>
          <Button>ボタン</Button>
          <Button variant="secondary">ボタン</Button>
          <Button variant="tertiary">ボタン</Button>
          <p className="flex items-center justify-center">Hover</p>
          <Button>ボタン</Button>
          <Button variant="secondary">ボタン</Button>
          <Button variant="tertiary">ボタン</Button>
          <p className="flex items-center justify-center">Active</p>
          <Button>ボタン</Button>
          <Button variant="secondary">ボタン</Button>
          <Button variant="tertiary">ボタン</Button>
          <p className="flex items-center justify-center">Focus</p>
          <Button>ボタン</Button>
          <Button variant="secondary">ボタン</Button>
          <Button variant="tertiary">ボタン</Button>
          <p className="flex items-center justify-center">Disabled</p>
          <Button disabled>ボタン</Button>
          <Button variant="secondary" disabled>
            ボタン
          </Button>
          <Button variant="tertiary" disabled>
            ボタン
          </Button>
        </div> */}
        <div className="grid grid-cols-4 gap-3">
          <p className="flex items-center justify-center">Default</p>
          <p className="flex items-center justify-center">Hover</p>
          <p className="flex items-center justify-center">Active</p>
          <p className="flex items-center justify-center">Focus</p>
          <ScrollTop />
          <ScrollTop />
          <ScrollTop />
          <ScrollTop />
        </div>
      </div>
    </>
  )
}

export default App
