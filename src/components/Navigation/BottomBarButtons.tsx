import { ElementType } from 'react'
import Link from 'next/link'

interface BottomBarButtonProps {
  icon: ElementType
  onAction?: () => void
  href?: string
}

function BottomBarButtons({
  icon: Icon,
  onAction,
  href = '#',
}: BottomBarButtonProps) {
  return (
    <Link
      className='mt-[-20px] overflow-hidden px-6 py-4 focus:rounded focus:bg-[#2B2B2B] focus:outline-none'
      href={href}
      onClick={onAction}
    >
      <Icon className='h-6 w-6 text-gray-100' />
    </Link>
  )
}

export default BottomBarButtons
