import { CrumpledPaperIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function ogo() {
  return (
    <div className='p-4 antialiased'>
      <Link className='flex items-center space-x-2 px-1 text-gray-200' href='#'>
        <CrumpledPaperIcon className='z-20 h-16 w-16 text-gray-200' />
        <span className='z-20 text-3xl font-extrabold'>Knedita</span>
      </Link>
    </div>
  )
}
