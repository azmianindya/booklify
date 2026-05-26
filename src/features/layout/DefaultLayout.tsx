import type { ReactNode } from "react"
import SidebarButton from "../../components/SidebarButton" // Perbaiki import (dulu Sidebar, sekarang SidebarButton)
import { IoLibrarySharp, IoHome, IoSettingsSharp } from "react-icons/io5"
import { FaBook } from "react-icons/fa"
import { MdPeopleAlt } from "react-icons/md"
import { HiDocumentText } from "react-icons/hi2"

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex bg-gray-200 w-full h-screen">
      <div className="w-60 min-h-screen bg-white border-r border-[#E5E7EB] px-6 py-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <IoLibrarySharp size={28} color="#4338CA" />
          <div className="font-bold text-black">Perpustakaan</div>
        </div>

        {/* Menu dengan SidebarButton */}
        <div className="flex flex-col gap-2 mt-12">
          <SidebarButton
            url="/dashboard"
            icon={<IoHome size={20} />}
            label="Dashboard"
            isActive={false}
          />
          <SidebarButton
            url="/dashboard/books"
            icon={<FaBook size={20} />}
            label="Books"
            isActive={true}
          />
          <SidebarButton
            url="/dashboard/members"
            icon={<MdPeopleAlt size={20} />}
            label="Members"
            isActive={false}
          />
          <SidebarButton
            url="/dashboard/borrowing"
            icon={<HiDocumentText size={20} />}
            label="Borrowing"
            isActive={false}
          />
          <SidebarButton
            url="/dashboard/settings"
            icon={<IoSettingsSharp size={20} />}
            label="Settings"
            isActive={false}
          />
        </div>
      </div>
      
      <div className="flex flex-col flex-1 p-8 overflow-y-auto">
        {children}
      </div>
    </div>
  )
}

export default DefaultLayout