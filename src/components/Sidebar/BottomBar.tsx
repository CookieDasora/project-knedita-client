import BottomBarButtons from './BottomBarButtons'
import {
  BellIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PersonIcon,
} from '@radix-ui/react-icons'

interface BottomBarProps {
  onSubmit: () => void
}

export default function BottomBar({ onSubmit }: BottomBarProps) {
  return (
    <div className='fixed bottom-0 left-1/2 z-10 flex h-20 w-full -translate-x-1/2 transform items-center justify-between bg-[#2B2B2B] text-gray-100 shadow-2xl md:hidden'>
      <BottomBarButtons icon={HomeIcon} onAction={onSubmit} />
      <BottomBarButtons icon={MagnifyingGlassIcon} />
      <BottomBarButtons icon={BellIcon} />
      <BottomBarButtons icon={PersonIcon} />
    </div>
  )
}
