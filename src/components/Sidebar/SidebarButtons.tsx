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
  onSubmit: () => void
}

export default function SidebarButtons({ onSubmit }: SidebarButtonProps) {
  return (
    <>
      <SidebarButton icon={HomeIcon} name='Home' onAction={onSubmit} />
      <SidebarButton
        icon={MagnifyingGlassIcon}
        name='Search'
        onAction={onSubmit}
      />
      <SidebarButton icon={BellIcon} name='Notifications' onAction={onSubmit} />
      <SidebarButton icon={PersonIcon} name='Profile' onAction={onSubmit} />
      <SidebarButton icon={GearIcon} name='Settings' onAction={onSubmit} />
      <SidebarPostButton />
    </>
  )
}
