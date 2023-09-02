import { ButtonHTMLAttributes, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

interface AlertActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
}

export default function AlertAction({ icon: Icon, ...rest }: AlertActionProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        'flex w-16 justify-center rounded-md border px-4 py-2 font-bold transition duration-500 hover:text-white hover:shadow-lg',
        rest.className
      )}
    >
      <Icon className='h-4 w-4' />
    </button>
  )
}
