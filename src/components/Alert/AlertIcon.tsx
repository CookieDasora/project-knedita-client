import { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

interface AlertProps {
  icon: ElementType
  className?: string
}

export default function AlertIcon({ icon: Icon, className }: AlertProps) {
  return <Icon className={twMerge('mr-4 h-16 w-16', className)} />
}
