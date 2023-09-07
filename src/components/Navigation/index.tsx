import { useState } from 'react'
import SidebarRoot from './SidebarRoot'
import SidebarUserInfo from './SidebarUserInfo'
import BottomBar from './BottomBar'
import SidebarContents from './SidebarContent'
import SidebarButtons from './SidebarButtons'
import SidebarCredits from './SidebarCredits'
import TopBar from './TopBar'

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <TopBar onAction={toggleSidebar} />
      <BottomBar />
      {isSidebarOpen && (
        <div
          className='fixed inset-0 z-10 bg-black opacity-50'
          onClick={toggleSidebar}
        ></div>
      )}
      <SidebarRoot isOpen={isSidebarOpen}>
        <SidebarUserInfo />
        <SidebarContents>
          <SidebarButtons />
        </SidebarContents>
        <div className='h-[1px] w-full bg-[#464646]'></div>
        <SidebarCredits />
      </SidebarRoot>
    </>
  )
}
