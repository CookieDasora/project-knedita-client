import { ReactNode } from 'react'

interface SidebarRootProps {
  children: ReactNode
  isOpen: boolean
}

export default function SidebarRoot({ children, isOpen }: SidebarRootProps) {
  return (
    <div
      className={`absolute inset-y-0 left-0 w-72 transform space-y-6 bg-[#262626] px-2 
                  py-7 text-gray-100 transition duration-500 ease-in-out 
                  ${isOpen ? '' : '-translate-x-full'}
                  fixed overflow-y-auto md:relative md:translate-x-0
                `}
    >
      {children}
    </div>
  )
}
