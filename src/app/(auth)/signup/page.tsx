'use client'

import { CrumpledPaperIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import Image from 'next/image'
import Wave from '../../../../public/wave.svg'

export default function SignupPage() {
  return (
    <>
      <div className='flex h-screen flex-col items-center justify-center '>
        <div className='p-4'>
          <Link
            className='flex items-center space-x-2 px-1 text-gray-200'
            href='#'
          >
            <CrumpledPaperIcon className='h-16 w-16 text-gray-200' />
            <span className='text-3xl font-extrabold'>Knedita</span>
          </Link>
        </div>

        <div className='flex w-96 items-center justify-center p-8'>
          <form
            autoComplete='off'
            className='mb-4 rounded bg-zinc-800 px-8 pb-8 pt-6 shadow-md'
          >
            <div className='mb-4'>
              <label className='mb-2 block text-sm font-bold'>Username</label>
              <input
                className='focus:shadow-outline w-full appearance-none rounded-xl border border-white bg-zinc-800 px-3 py-2 leading-tight shadow transition duration-300 focus:border-violet-500 focus:text-violet-300 focus:outline-none'
                id='username'
                type='text'
              />
            </div>
            <div className='mb-4'>
              <label className='mb-2 block text-sm font-bold'>
                Display name (Optional)
              </label>
              <input
                className='focus:shadow-outline w-full appearance-none rounded-xl border border-white bg-zinc-800 px-3 py-2 leading-tight shadow transition duration-300 focus:border-violet-500 focus:text-violet-300 focus:outline-none'
                id='displayname'
                type='text'
              />
            </div>
            <div className='mb-4'>
              <label className='mb-2 block text-sm font-bold'>Email</label>
              <input
                className='focus:shadow-outline w-full appearance-none rounded-xl border border-white bg-zinc-800 px-3 py-2 leading-tight shadow transition duration-300 focus:border-violet-500 focus:text-violet-300 focus:outline-none'
                id='email'
                type='email'
              />
            </div>
            <div className='mb-6'>
              <label className='mb-2 block text-sm font-bold'>Password</label>
              <input
                className='focus:shadow-outline mb-3 w-full appearance-none rounded-xl border border-white bg-zinc-800 px-3 py-2 leading-tight shadow transition duration-300 focus:border-violet-500 focus:text-violet-300 focus:outline-none'
                id='password'
                type='password'
              />
            </div>
            <div className='flex items-center justify-between'>
              <button
                className='focus:shadow-outline rounded-xl border border-violet-700 px-4 py-2 font-bold text-white transition duration-500 hover:bg-violet-500 focus:outline-none'
                type='button'
              >
                Sign Up
              </button>
              <a
                className='inline-block align-baseline text-sm font-bold text-violet-400 hover:text-violet-600'
                href='/signup'
              >
                Log in here
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className='fixed bottom-0 left-0 hidden w-full p-0 md:block'>
        <Image alt='Just a beauty' layout='responsive' priority src={Wave} />
      </div>
    </>
  )
}
