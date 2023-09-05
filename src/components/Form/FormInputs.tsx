import { ReactNode } from 'react'

interface FormInputsProps {
  children: ReactNode
}

export default function FormInputs({ children }: FormInputsProps) {
  return <div className='mb-6'>{children}</div>
}
