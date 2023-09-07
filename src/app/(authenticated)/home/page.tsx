'use client'

import { useEffect, useState } from 'react'
import { isMobileDevice, isPwaInstalled } from '@/helpers/MobileDetection'
import { Alert } from '@/components/Alert/index'
import { CheckIcon, InfoCircledIcon } from '@radix-ui/react-icons'
import { useSession } from 'next-auth/react'
import Sidebar from '@/components/Sidebar/index'

export default function HomePage() {
  const [showAlert, setShowAlert] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: session } = useSession()

  useEffect(() => {
    if (isMobileDevice()) {
      if (!isPwaInstalled()) {
        setShowAlert(true)
      }
    }
  }, [])

  const toggleAlert = () => {
    setShowAlert(!showAlert)
  }

  return (
    <main className='flex h-screen justify-between'>
      <Sidebar />

      <div className='flex-1 bg-zinc-900'>Part 2</div>
      <div className='hidden bg-blue-500 md:block md:flex-1'>Part 3</div>

      {showAlert && (
        <Alert.Root>
          <Alert.Content info='Please install the PWA for the best mobile experience.'>
            <Alert.Icon className='text-blue-400' icon={InfoCircledIcon} />
          </Alert.Content>
          <Alert.Actions>
            <Alert.Action
              className='border-emerald-800/80 text-emerald-500 hover:bg-emerald-500'
              icon={CheckIcon}
              onClick={toggleAlert}
            />
          </Alert.Actions>
        </Alert.Root>
      )}
    </main>
  )
}
