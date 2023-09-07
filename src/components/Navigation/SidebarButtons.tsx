import {
  BellIcon,
  GearIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PersonIcon,
} from '@radix-ui/react-icons'
import SidebarButton from './SidebarButton'
import SidebarPostButton from './SidebarPostButton'

interface SidebarButtonProps {
  onSubmit?: () => void
}

export default function SidebarButtons({ onSubmit }: SidebarButtonProps) {
  return (
    <>
      <SidebarButton icon={HomeIcon} name='Home' />
      <SidebarButton
        icon={MagnifyingGlassIcon}
        name='Search'
        onAction={onSubmit}
      />
      <SidebarButton icon={BellIcon} name='Notifications' />
      <SidebarButton icon={PersonIcon} name='Profile' />
      <SidebarButton icon={GearIcon} name='Settings' />
      <SidebarPostButton />
    </>
  )
}
