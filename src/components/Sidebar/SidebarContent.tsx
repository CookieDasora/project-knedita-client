import { ReactNode } from 'react'

interface SidebarContentProps {
  children: ReactNode
}

export default function SidebarContents({ children }: SidebarContentProps) {
  return (
    <nav className='space-y-2 p-3 leading-relaxed tracking-normal antialiased md:text-xs lg:text-lg'>
      {children}
    </nav>
  )
}
