import React from 'react'
import { twMerge as tm } from 'tailwind-merge'

const tableStructure = {
  head: ['Table Header1', 'Table Header2', 'Table Header3', 'Table Header4'],
  body: [
    {
      head: 'Table Header1',
      body: ['Table Data11', 'Table Data12', 'Table Data13'],
    },
    {
      head: 'Table Header2',
      body: ['Table Data21', 'Table Data22', 'Table Data23'],
    },
    {
      head: 'Table Header3',
      body: ['Table Data31', 'Table Data32', 'Table Data33'],
    },
    {
      head: 'Table Header4',
      body: ['Table Data41', 'Table Data42', 'Table Data43'],
    },
    {
      head: 'Table Header5',
      body: ['Table Data51', 'Table Data52', 'Table Data53'],
    },
    {
      head: 'Table Header6',
      body: ['Table Data61', 'Table Data62', 'Table Data63'],
    },
    {
      head: 'Table Header7',
      body: ['Table Data71', 'Table Data72', 'Table Data73'],
    },
    {
      head: 'Table Header8',
      body: ['Table Data81', 'Table Data82', 'Table Data83'],
    },
  ],
}

const Table = () => {
  return (
    <table className='min-w-tablet overflow-x-scroll'>
      <thead>
        <tr>
          {tableStructure.head.map((th) => (
            <th
              key={th}
              className={tm(
                'border px-2 py-6 text-left w-64',
                'bg-sumi-50 border-sumi-300 text-sumi-900',
                'dark:bg-sumi-900 dark:border-sumi-700 dark:text-white'
              )}
            >
              {th}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableStructure.body.map((tr) => (
          <tr key={tr.head}>
            <th
              className={tm(
                'border px-2 py-6 text-left',
                'bg-sumi-50 border-sumi-300 text-sumi-900',
                'dark:bg-sumi-900 dark:border-sumi-700 dark:text-white'
              )}
            >
              {tr.head}
            </th>
            {tr.body.map((td) => (
              <td
                key={td}
                className={tm(
                  'border px-2 py-6',
                  'bg-white border-sumi-300 text-sumi-900',
                  'dark:bg-sumi-800 dark:border-sumi-700 dark:text-white'
                )}
              >
                {td}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
