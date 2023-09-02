'use client'

import { useEffect, useState } from 'react'
import { isMobileDevice, isPwaInstalled } from '@/helpers/MobileDetection'
import { Alert } from '@/components/Alert/index'
import { CheckIcon, InfoCircledIcon } from '@radix-ui/react-icons'
import Sidebar from '@/components/Sidebar/index'

export default function HomePage() {
  const [showAlert, setShowAlert] = useState(false)

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
    <main className='relative min-h-screen md:flex'>
      <Sidebar />
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
