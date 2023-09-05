'use client'

import { ReactNode } from 'react'

interface AlertRootProps {
  children: ReactNode
}

export default function AlertRoot({ children }: AlertRootProps) {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm'>
      <div className='flex w-11/12 max-w-lg flex-col rounded-xl bg-zinc-800 p-8 text-white shadow-lg'>
        {children}
      </div>
    </div>
  )
}
