import { ReactNode } from 'react'

interface AlertContentProps {
  info: string
  children: ReactNode
}

export default function AlertContent({ info, children }: AlertContentProps) {
  return (
    <div className='flex items-center'>
      {children}
      <span className='text-base'>{info}</span>
    </div>
  )
}
