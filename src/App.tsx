import { Routes, Route } from 'react-router'
import Books from './pages/Books'
import Home from './pages/index' // Import Home page

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/books" element={<Books />} />
    </Routes>
  )
}

export default App