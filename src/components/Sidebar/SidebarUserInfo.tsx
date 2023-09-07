'use client'

import { ExitIcon } from '@radix-ui/react-icons'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

export default function SidebarUserInfo() {
  const { data: session } = useSession()

  const displayName = session?.user.displayName || session?.user.username

  return (
    <>
      <div className='flex items-center justify-between p-4'>
        <div className='flex items-center space-x-4'>
          <div className='relative h-12 w-12 overflow-hidden rounded-full'>
            <Image
              alt='Profile Picture'
              className='object-cover'
              height={64}
              src={
                session!.user.profileImage
                  ? session!.user.profileImage
                  : '/profile_placeholder.png'
              }
              width={64}
            />
          </div>
          <div className='flex flex-col'>
            <p className='font-bold text-zinc-300'>{displayName}</p>
            <p className='font-semibold text-zinc-500'>
              @{session?.user.username}
            </p>
          </div>
        </div>
        <button onClick={() => signOut()}>
          <ExitIcon className='h-6 w-6' />
        </button>
      </div>
      <div className='flex justify-around'>
        <div className='flex flex-row items-center space-x-2 text-base'>
          <span className='font-bold'>0</span>
          <p className='font-medium text-zinc-500'>Followers</p>
        </div>
        <div className='flex flex-row items-center space-x-2 text-base'>
          <span className='font-bold'>0</span>
          <p className='font-medium text-zinc-500'>Following</p>
        </div>
      </div>
    </>
  )
}
