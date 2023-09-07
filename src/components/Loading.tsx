import { ReloadIcon } from '@radix-ui/react-icons'

export default function Loading() {
  return (
    <div className='fixed inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-sm'>
      <div className='flex max-w-lg rounded-xl p-8 text-white shadow-lg'>
        <ReloadIcon className='h-32 w-32 animate-spin text-violet-500' />
      </div>
    </div>
  )
}
