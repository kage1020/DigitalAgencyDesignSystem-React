import React, { Fragment } from 'react'
import { twMerge as tm } from 'tailwind-merge'
import type { BreadcrumbProps } from 'types'

const Breadcrumb = ({ className, links }: BreadcrumbProps) => {
  return (
    <div
      className={tm(
        'flex justify-center items-center gap-2',
        'text-sumi-900 dark:text-white',
        className
      )}
    >
      {links.map((link, i) => (
        <Fragment key={link.label}>
          {i !== links.length - 1 && (
            <>
              <a
                className={tm(
                  'underline',
                  'text-sea-600',
                  'hover:text-sea-darken-600',
                  'active:text-sea-darken-600',
                  'visited:text-sea-900',
                  'dark:text-sea-300',
                  'dark:hover:text-sea-darken-300',
                  'dark:active:text-sea-darken-300',
                  'dark:visited:text-sea-200'
                )}
                href={link.path}
              >
                {link.label}
              </a>
              <span>&gt;</span>
            </>
          )}
          {i === links.length - 1 && <span>{link.label}</span>}
        </Fragment>
      ))}
    </div>
  )
}

export default Breadcrumb
