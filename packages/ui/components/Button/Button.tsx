import React, { useMemo } from 'react'
import { ButtonProps } from './Button.types'

export const Button: React.FC<ButtonProps> = ({ children, type, ...props }) => {
  let css = useMemo(() => createCss(type), [])

  return <button className={css}>{children}</button>
}

function createCss(type: ButtonProps['type']) {
  let css = 'px-4 py-2 rounded'

  if (type === 'primary') {
    css += ' bg-blue-600 text-white'
  } else {
    css += ' bg-red-600 text-white'
  }
  return css
}
