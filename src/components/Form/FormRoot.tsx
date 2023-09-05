import { forwardRef, ReactNode } from 'react'

interface FormRootProps extends React.HTMLProps<HTMLFormElement> {
  children: ReactNode
}

const FormRoot = forwardRef<HTMLFormElement, FormRootProps>(
  ({ children, ...props }, ref) => {
    return (
      <form
        autoComplete='off'
        className='z-40 mb-6 rounded-xl bg-zinc-800 px-8 pb-8 pt-6 shadow-md'
        ref={ref}
        {...props}
      >
        {children}
      </form>
    )
  }
)

export default FormRoot
