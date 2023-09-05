import Link from 'next/link'

interface FormLinkProps {
  text: string
  href: string
}

export default function FormLink({ href, text }: FormLinkProps) {
  return (
    <Link
      className='inline-block align-baseline text-sm font-bold text-violet-400 hover:text-violet-600'
      href={href}
    >
      {text}
    </Link>
  )
}
