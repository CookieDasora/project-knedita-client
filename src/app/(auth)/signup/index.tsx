'use client'

import Logo from '@/components/Logo'
import Image from 'next/image'
import Wave from 'public/wave.svg'
import { Form } from '@/components/Form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateUserFormSchema } from '@/schemas/CreateUserFormSchema'
import { z } from 'zod'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import client from '@/helpers/Client'
import axios from 'axios'
import { useState } from 'react'
import { Alert } from '@/components/Alert'
import { CheckIcon, CrossCircledIcon } from '@radix-ui/react-icons'

type CreateUserFormData = z.infer<typeof CreateUserFormSchema>

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(CreateUserFormSchema),
  })

  const [error, setError] = useState(null)

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/home'

  const onSubmit = async (user: CreateUserFormData) => {
    try {
      await client.post('/user/signup', {
        username: user.username,
        email: user.email,
        password: user.password,
      })
      signIn(undefined, { callbackUrl })
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setError(e.response?.data.error)
      }
    }
  }

  const toggleAlert = () => setError(null)

  return (
    <>
      <div className='flex h-screen flex-col items-center justify-center '>
        <Logo />

        <div className='flex w-96 items-center justify-center p-8'>
          <Form.Root onSubmit={handleSubmit(onSubmit)}>
            <Form.Inputs>
              <Form.Label id='username' label='Username' />
              <Form.Input
                id='username'
                type='username'
                {...register('username')}
              />
              {errors.username && (
                <span className='justify-left ml-2 mt-2 flex text-xs font-bold text-red-500'>
                  {errors.username.message as string}
                </span>
              )}
            </Form.Inputs>
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
              <Form.Action text='Sign Up' type='submit' />
              <Form.Link href='/login' text='Log in here' />
            </Form.Actions>
          </Form.Root>
        </div>
      </div>

      {error && (
        <Alert.Root>
          <Alert.Content info={error}>
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

      <div className='fixed bottom-0 left-0 hidden h-32 w-full p-0 md:block'>
        <Image alt='Just a beauty' priority src={Wave} />
      </div>
    </>
  )
}
