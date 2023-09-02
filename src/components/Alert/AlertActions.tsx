import { ReactNode } from 'react'

interface AlertActionsProps {
  children: ReactNode
}

export default function AlertActions({ children }: AlertActionsProps) {
  return <div className='mt-4 flex justify-center space-x-4'>{children}</div>
}
