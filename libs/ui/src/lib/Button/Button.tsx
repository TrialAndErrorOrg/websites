import React, { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

/* eslint-disable-next-line */
export interface ButtonProps
  extends React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      type={'button' ?? rest.type}
      className={twMerge(
        'inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 transition-colors hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
