import { useState } from 'react'
import SidebarRoot from './SidebarRoot'
import SidebarLogo from './SidebarLogo'
import BottomBar from './BottomBar'
import SidebarContents from './SidebarContent'
import SidebarButtons from './SidebarButtons'
import SidebarCredits from './SidebarCredits'

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <BottomBar onSubmit={toggleSidebar} />
      <SidebarRoot isOpen={isSidebarOpen}>
        <SidebarLogo />
        <div className='h-[0.5px] w-full bg-[#464646]'></div>
        <SidebarContents>
          <SidebarButtons onSubmit={toggleSidebar} />
        </SidebarContents>
        <div className='h-[1px] w-full bg-[#464646]'></div>
        <SidebarCredits />
      </SidebarRoot>
    </>
  )
}
