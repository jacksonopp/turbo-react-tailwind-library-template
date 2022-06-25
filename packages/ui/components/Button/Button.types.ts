import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  type: 'primary' | 'secondary'
}
