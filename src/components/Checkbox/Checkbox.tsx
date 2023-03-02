import React, { useCallback, useState } from 'react'
import { twMerge as tm } from 'tailwind-merge'
import type { CheckboxProps } from 'types'

const Checkbox = ({
  className,
  label,
  options,
  values = [],
  required = 0,
  disabled = false,
  helperText = '',
  errorText = '',
}: CheckboxProps) => {
  const [vals, setVals] = useState(values)

  const updateVals = useCallback((v: string) => {
    setVals((p) => {
      if (p.includes(v)) return p.filter((m) => m !== v)
      else return [...p, v]
    })
  }, [])

  return (
    <div className={tm('text-sumi-900 dark:text-white', className)}>
      <div className='flex items-center'>
        <span
          className={tm(
            'mr-2 text-sm font-medium',
            vals.length < required && 'text-sun-800 dark:text-sun-500',
            disabled && 'text-sumi-500 dark:text-sumi-600'
          )}
        >
          {label}
        </span>
        {required > 0 && <span className='text-xs text-sun-800 dark:text-sun-500'>必須</span>}
        {required === 0 && <span className='text-xs text-sumi-500 dark:text-sumi-600'>任意</span>}
      </div>
      <div className='grid gap-y-4 my-2'>
        {options.map((o) => (
          <label
            key={o.name}
            className={tm(
              'flex items-center p-2',
              'outline outline-2 outline-offset-4 rounded-lg',
              'outline-transparent',
              'focus-within:outline-wood-500'
            )}
          >
            <input
              className={tm(
                'w-6 h-6 mr-4',
                'outline-none',
                'accent-sea-600',
                'dark:accent-sea-300'
              )}
              type='checkbox'
              name={o.name}
              checked={vals.includes(o.name)}
              disabled={disabled}
              onChange={() => {
                updateVals(o.name)
              }}
            />
            <span
              className={tm(
                vals.length < required && 'text-sun-800 dark:text-sun-500',
                disabled && 'text-sumi-500 dark:text-sumi-600'
              )}
            >
              {o.label}
            </span>
          </label>
        ))}
      </div>
      {helperText && (
        <span
          className={tm(
            'block text-xs mb-2 text-sumi-700 dark:text-sumi-400',
            disabled && 'text-sumi-500 dark:text-sumi-600'
          )}
        >
          {helperText}
        </span>
      )}
      {errorText && (
        <span className='block text-xs text-sun-800 dark:text-sun-500'>{errorText}</span>
      )}
    </div>
  )
}

export default Checkbox
