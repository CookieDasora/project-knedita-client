import React, { forwardRef, InputHTMLAttributes } from 'react'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string
  type?: string
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ id = '', type = 'text', ...rest }, ref) => {
    return (
      <input
        className='focus:shadow-outline w-full appearance-none rounded-xl border border-gray-400 bg-transparent px-3 py-2 leading-tight shadow transition duration-300 focus:border-violet-500 focus:text-violet-300 focus:outline-none'
        id={id}
        ref={ref}
        type={type}
        {...rest}
      />
    )
  }
)

export default FormInput
