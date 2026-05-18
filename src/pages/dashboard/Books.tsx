import Sidebar from '../../components/Sidebar.tsx'
import Header from '../../components/Header.tsx'
import Searchbar from '../../components/Searchbar.tsx'
import Bookcard from '../../components/Bookcard.tsx'

const Books = () => {
  return (
    <div className="flex bg-gray-200 w-full h-screen">
      <Sidebar />
      <div className="flex flex-col p-8">
        <Header />
        <Searchbar />
        <Bookcard />
      </div>
    </div>
  )
}

export default Books