import { ElementType } from 'react'
import Link from 'next/link'

interface SidebarButtonProps {
  icon: ElementType
  name: string
  href?: string
  onAction?: () => void
}

function SidebarButton({
  name,
  icon: Icon,
  href = '#',
  onAction,
}: SidebarButtonProps) {
  return (
    <Link
      className='flex items-center rounded px-4 py-2.5 font-bold 
            transition duration-200 hover:bg-violet-500 
            hover:text-white'
      href={href}
      onClick={onAction}
    >
      <Icon className='h-6 w-6 text-gray-200' />
      <span className='ml-2'>{name}</span>
    </Link>
  )
}

export default SidebarButton
