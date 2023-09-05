import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface FormActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export default function FormAction({ text, ...rest }: FormActionProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        'focus:shadow-outline rounded-xl border border-violet-700 px-4 py-2 font-bold text-white transition duration-500 hover:bg-violet-500 focus:outline-none',
        rest.className
      )}
      type={rest.type}
    >
      {text}
    </button>
  )
}
