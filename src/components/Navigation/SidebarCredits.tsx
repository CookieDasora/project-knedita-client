import Link from 'next/link'

export default function SidebarCredits() {
  return (
    <nav className='space-y-4 p-4 text-xs font-bold text-[#7E7E7E] antialiased'>
      <p>Created by @Hackntosh</p>
      <p>©2023 Project Knedita</p>
      <Link
        className='text-violet-400 transition duration-200 hover:text-violet-500'
        href={'https://github.com/CookieDasora/project-knedita'}
      >
        Github Repository
      </Link>
      <br />
      <p>
        Icons provided by
        <Link
          className='text-violet-400 transition duration-200 hover:text-violet-500'
          href={'https://github.com/radix-ui/icons'}
        >
          {' '}
          Radix-UI
        </Link>
      </p>
    </nav>
  )
}
