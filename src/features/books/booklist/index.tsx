import { useEffect, useState } from "react"
import { fetchBooks } from "../../../lib/api"
import BookCard from "./BookCard"
import BookHeader from "./BookHeader"
import type { Book } from "../types/book"
import Searchbar from "../../../components/Searchbar"

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchBooks()
      .then((data) => {
        setBooks(data)
        setLoading(false)
      })
      .catch(() => {
        setError("Gagal memuat data buku")
        setLoading(false)
      })
  }, [])

  const handleAddBook = () => {
    // Implementasi tambah buku
    console.log("Add book clicked")
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400 text-sm">
        Memuat buku...
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-400 text-sm">
        {error}
      </div>
    )
  }

  return (
    <div>
      <BookHeader onAddBook={handleAddBook} />
      <Searchbar/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default BookList