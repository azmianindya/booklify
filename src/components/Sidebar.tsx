import { IoLibrarySharp, IoHome, IoSettingsSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi2";

const Sidebar = () => {
  return (
    <div className="w-60 min-h-screen bg-white border-r border-[#E5E7EB] px-6 py-8">

      {/* logo */}
      <div className="flex items-center gap-3">
        <IoLibrarySharp size={28} color="#4338CA" />
        <div className="font-bold text-black">
          Perpustakaan
        </div>
      </div>

      {/* menu */}
      <div className="flex flex-col gap-2 mt-12">

        <div className="h-11 p-4 rounded-xl flex items-center gap-3 text-gray-600">
          <IoHome size={20} />
          <div>Dashboard</div>
        </div>

          {/* menu aktif */}
          <div className="h-11 p-4 rounded-xl flex items-center gap-3 bg-[#ECEBFF] text-[#4338CA]">
            <FaBook size={20} />
            <div className="font-medium">Books</div>
          </div>

        <div className="h-11 p-4 rounded-xl flex items-center gap-3 text-gray-600">
          <MdPeopleAlt size={20} />
          <div>Members</div>
        </div>

        <div className="h-11 p-4 rounded-xl flex items-center gap-3 text-gray-600">
          <HiDocumentText size={20} />
          <div>Borrowing</div>
        </div>

        <div className="h-11 p-4 rounded-xl flex items-center gap-3 text-gray-600">
          <IoSettingsSharp size={20} />
          <div>Settings</div>
        </div>

      </div>
    </div>
  )
}

export default Sidebar