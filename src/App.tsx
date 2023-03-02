import React, { useState } from 'react'
import { MdDarkMode, MdOutlineWbSunny } from 'react-icons/md'
import { twMerge as tm } from 'tailwind-merge'
import Container from 'components/Container/Container'
import { DotBadgeNavigation, CountBadgeNavigation } from 'components/Navigation/Navigation'
import Button from 'components/Button/Button'
import Input from 'components/Input/Input'
import TextField from 'components/TextField/TextField'
import TextArea from 'components/TextArea/TextArea'
import Select from 'components/Select/Select'
import Radio from 'components/Radio/Radio'
import Checkbox from 'components/Checkbox/Checkbox'
import Dialog from 'components/Dialog/Dialog'
import useDialog from 'components/Dialog/useDialog'
import Table from 'components/Table/Table'
import CircleButton from 'components/Button/Circle'
import Pagination from 'components/Pagination/Pagination'
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'

function App() {
  const [dark, setDark] = useState(false)
  const { ref, setOpen } = useDialog()
  const [page, setPage] = useState(0)

  return (
    <div className={tm(dark && 'dark')}>
      <div
        className={tm(
          'grid place-items-center p-4',
          'font-noto',
          'bg-sumi-100 text-sumi-900 dark:bg-sumi-900 dark:text-sumi-100'
        )}
      >
        <button
          className='border-2 border-sumi-900 dark:border-white rounded absolute right-8 top-8 p-2'
          onClick={() => {
            setDark((p) => !p)
          }}
        >
          {!dark && <MdOutlineWbSunny size={36} />}
          {dark && <MdDarkMode size={36} />}
        </button>
        <h2 className='text-3xl w-full'>ボタン</h2>
        <Container row>
          <Button variant='primary'>ボタン</Button>
          <Button variant='secondary'>ボタン</Button>
          <Button variant='tertiary'>ボタン</Button>
          <CircleButton variant='top' alt='トップページに戻る' />
        </Container>
        <hr className='border-sumi-900 dark:border-white' />
        <h2 className='text-3xl w-full'>ボトムナビゲーション</h2>
        <Container row>
          <DotBadgeNavigation />
          <CountBadgeNavigation />
        </Container>
        <hr className='border-sumi-900 dark:border-white' />
        <h2 className='text-3xl w-full'>インプット/ラベル</h2>
        <Container row>
          <Input name='text1' type='tel' />
          <TextField
            name='text2'
            type='tel'
            label='電話番号'
            placeholder='（例） 090-1234-5678'
            value='test'
            helperText='住民票に記載された姓をカタカナで記入します。'
            errorText='数字で入力してください。'
            required
          />
        </Container>
        <hr className='border-sumi-900 dark:border-white' />
        <h2 className='text-3xl w-full'>テキストエリア</h2>
        <Container row>
          <TextArea
            name='text3'
            label='お問い合わせ詳細'
            placeholder='（例） 住所を変更したい'
            value=''
            helperText='できる限りくわしくお書きください。'
            errorText='入力必須項目です。'
            required
          />
        </Container>
        <hr className='border-sumi-900 dark:border-white' />
        <h2 className='text-3xl w-full'>セレクター</h2>
        <Container row>
          <Select
            name='select'
            label='ラベル'
            options={['選択肢1', '選択肢2', '選択肢3', '選択肢4', '選択肢5', '選択肢6']}
            required
          />
        </Container>
        <hr className='border-sumi-900 dark:border-white' />
        <h2 className='text-3xl w-full'>ラジオボタン</h2>
        <Container row>
          <Radio
            name='radio1'
            label='ラベル'
            options={['選択肢1', '選択肢2', '選択肢3', '選択肢4', '選択肢5']}
            value='選択肢2'
            required
          />
          <Radio
            variant='tile'
            name='radio2'
            label='ラベル'
            options={['選択肢1', '選択肢2', '選択肢3', '選択肢4', '選択肢5']}
            required
          />
        </Container>
        <hr className='border-sumi-900 dark:border-white' />
        <h2 className='text-3xl w-full'>チェックボックス</h2>
        <Container row>
          <Checkbox
            label='ラベル'
            options={[
              {
                name: 'option1',
                label: '選択肢1',
              },
              {
                name: 'option2',
                label: '選択肢2',
              },
              {
                name: 'option3',
                label: '選択肢3',
              },
              {
                name: 'option4',
                label: '選択肢4',
              },
              {
                name: 'option5',
                label: '選択肢5',
              },
            ]}
            required={2}
            helperText='少なくとも２つ選択してください。'
          />
        </Container>
        <hr className='border-sumi-900 dark:border-white' />
        <h2 className='text-3xl w-full'>モーダルダイアログ</h2>
        <Container row>
          <Button
            onClick={() => {
              setOpen(true)
            }}
          >
            Open Dialog
          </Button>
          <Dialog
            dialogRef={ref}
            onClose={() => {
              setOpen(false)
            }}
          />
        </Container>
        <hr className='border-sumi-900 dark:border-white' />
        <h2 className='text-3xl w-full'>テーブル</h2>
        <Container className='justify-start desktop:justify-center' row>
          <Table />
        </Container>
        <hr className='border-sumi-900 dark:border-white' />
        <h2 className='text-3xl w-full'>ページネーション</h2>
        <Container>
          <Pagination
            count={10}
            page={page}
            onChange={(page) => {
              setPage(page)
            }}
          />
        </Container>
        <hr className='border-sumi-900 dark:border-white' />
        <h2 className='text-3xl w-full'>パンくずリスト</h2>
        <Container>
          <Breadcrumb
            links={[
              {
                label: 'Home',
                path: '#',
              },
              {
                label: '政策',
                path: '#',
              },
              {
                label: '審議会・研究会',
                path: '#',
              },
              {
                label: 'デジタル庁における入札制限等の在り方に関する検討会',
                path: '#',
              },
            ]}
          />
        </Container>
      </div>
    </div>
  )
}

export default App
