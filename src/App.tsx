import { Routes, Route } from 'react-router'
import Books from './pages/Books'
import Home from './pages/index'
import Dashboard from './pages/Dashboard'
import Members from './pages/Members'
import Borrowing from './pages/Borrowing'
import Settings from './pages/Settings'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/books" element={<Books />} />
      <Route path="/dashboard/members" element={<Members />} />
      <Route path="/dashboard/borrowing" element={<Borrowing />} />
      <Route path="/dashboard/settings" element={<Settings />} />
    </Routes>
  )
}

export default App