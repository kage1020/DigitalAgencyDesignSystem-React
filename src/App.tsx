import ThemeSwitcher from "@/components/ThemeSwitcher"
import Button from "@/components/Button"
import ScrollTop from "@/components/ScrollTop"
import TextField from "@/components/TextField"
import TextArea from "@/components/TextArea"
import Selector from "@/components/Selector"

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
        {/* <div className="grid grid-cols-4 gap-3 p-3">
          <p className="flex items-center justify-center">Default</p>
          <p className="flex items-center justify-center">Hover</p>
          <p className="flex items-center justify-center">Active</p>
          <p className="flex items-center justify-center">Focus</p>
          <ScrollTop />
          <ScrollTop />
          <ScrollTop />
          <ScrollTop />
        </div> */}
        {/* <div className="grid grid-cols-3 gap-3 bg-white p-3 dark:bg-grey-900">
          <p className="flex items-center justify-center">Default</p>
          <TextField className="col-span-2" label="ラベル" />
          <p className="flex items-center justify-center">Focus</p>
          <TextField className="col-span-2" label="ラベル" />
          <p className="flex items-center justify-center">Filled</p>
          <TextField
            className="col-span-2"
            label="ラベル"
            value="入力済みの内容"
            supportText="サポートテキストが入ります"
          />
          <p className="flex items-center justify-center">Error</p>
          <TextField
            className="col-span-2"
            label="ラベル"
            value="誤った入力内容"
            type="email"
            required
            errorText="エラーメッセージが入ります"
          />
          <p className="flex items-center justify-center">Disabled</p>
          <TextField className="col-span-2" label="ラベル" disabled />
        </div> */}
        {/* <div className="grid grid-cols-3 gap-3 bg-white p-3 dark:bg-grey-900">
          <p className="flex items-center justify-center">Default</p>
          <TextArea className="col-span-2" label="ラベル" />
          <p className="flex items-center justify-center">Filled</p>
          <TextArea
            className="col-span-2"
            label="ラベル"
            value="入力済みの内容"
            supportText="サポートテキストが入ります"
            maxLength={100}
          />
          <p className="flex items-center justify-center">Error</p>
          <TextArea
            className="col-span-2"
            label="ラベル"
            value="誤った入力内容。誤った入力内容。"
            required
            errorText="エラーメッセージが入ります"
            maxLength={10}
          />
          <p className="flex items-center justify-center">Disabled</p>
          <TextArea className="col-span-2" label="ラベル" disabled />
        </div> */}
        <div>
          <Selector
            label="ラベル"
            options={[
              { value: "1", label: "選択肢1" },
              { value: "2", label: "選択肢2" },
              { value: "3", label: "選択肢3" },
              { value: "4", label: "選択肢4" },
              { value: "5", label: "選択肢5" },
              { value: "6", label: "選択肢6" },
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default App
