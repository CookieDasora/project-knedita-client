'use client'

import Image from 'next/image'
import Wave from 'public/highwave3.svg'
import Logo from '@/components/Logo'
import { Form } from '@/components/Form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthUserFormSchema } from '@/schemas/AuthUserFormSchema'
import { z } from 'zod'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Alert } from '@/components/Alert'
import { CheckIcon, CrossCircledIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import Loading from '@/components/Loading'

type AuthUserFormData = z.infer<typeof AuthUserFormSchema>

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthUserFormData>({
    resolver: zodResolver(AuthUserFormSchema),
  })

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/home'

  const onSubmit = async (data: AuthUserFormData) => {
    setLoading(true)
    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
      callbackUrl,
    })

    if (result?.error) {
      setError(result?.error)
    }

    setLoading(false)

    router.push(callbackUrl)
  }

  const toggleAlert = () => setError(null)

  return (
    <>
      <div className='flex h-screen flex-col items-center justify-center '>
        <Logo />

        <div className='flex w-96 items-center justify-center p-8'>
          <Form.Root onSubmit={handleSubmit(onSubmit)}>
            <Form.Inputs>
              <Form.Label id='email' label='Email' />
              <Form.Input id='email' type='email' {...register('email')} />
              {errors.email && (
                <span className='justify-left ml-2 mt-2 flex text-xs font-bold text-red-500'>
                  {errors.email.message as string}
                </span>
              )}
            </Form.Inputs>

            <Form.Inputs>
              <Form.Label id='password' label='Password' />
              <Form.Input
                id='password'
                type='password'
                {...register('password')}
              />
              {errors.password && (
                <span className='justify-left ml-2 mt-2 flex text-xs font-bold text-red-500'>
                  {errors.password.message as string}
                </span>
              )}
            </Form.Inputs>

            <Form.Actions>
              <Form.Action text='Login' type='submit' />
              <Form.Link href='/signup' text='New here? Sign up' />
            </Form.Actions>
          </Form.Root>
        </div>
      </div>

      {loading && <Loading />}

      {error && (
        <Alert.Root>
          <Alert.Content info='Invalid e-mail or password'>
            <Alert.Icon className='text-red-400' icon={CrossCircledIcon} />
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

      <div className='fixed bottom-0 left-0 z-10 hidden w-full p-0 md:block'>
        <Image alt='Just a beauty' priority src={Wave} />
      </div>
    </>
  )
}
