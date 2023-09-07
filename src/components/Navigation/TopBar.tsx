import { CrumpledPaperIcon } from '@radix-ui/react-icons'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

interface TopBarProps {
  onAction?: () => void
}

export default function TopBar({ onAction }: TopBarProps) {
  const { data: session } = useSession()

  return (
    <div className='fixed flex h-16 w-full items-center bg-zinc-800 shadow-lg md:hidden'>
      <div className='flex items-center justify-start pl-4'>
        <button onClick={onAction}>
          <Image
            alt='Profile Picture'
            className='rounded-full'
            height={32}
            src={session?.user.profileImage as string}
            width={32}
          />
        </button>
      </div>
      <div className='flex flex-grow items-center justify-center pr-10'>
        <CrumpledPaperIcon className='h-8 w-8' />
      </div>
    </div>
  )
}
