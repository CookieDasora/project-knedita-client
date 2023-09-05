import { ReactNode } from 'react'

interface FormActionsProps {
  children: ReactNode
}

export default function FormActions({ children }: FormActionsProps) {
  return <div className='flex items-center justify-between'>{children}</div>
}
