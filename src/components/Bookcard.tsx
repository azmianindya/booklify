import { useEffect, useState } from "react"
import { fetchBooks } from "../lib/api"
import { getAuthorName, getCoverUrl } from "../features/books/data/books"
import type { Book } from "../features/books/types/types"
import { Button } from "@heroui/react"

const Bookcard = () => {

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {books.map((book) => {
        const coverUrl = getCoverUrl(book.formats)
        const authorName = getAuthorName(book.authors)
        const isBorrowed = book.download_count > 20000

        return (
          <div key={book.id} className="flex flex-col bg-white border border-[#F3F4F6] rounded-[20px] p-5 gap-6 shadow-sm">

            {/* cover */}
            <div className="w-full h-60">
              <img
                src={coverUrl ?? ""}
                alt={book.title}
                className="w-full h-full rounded-xl object-cover object-top"
              />
            </div>

            {/* deskripsi */}
            <div className="flex flex-col gap-1">
              <div className="font-semibold text-[14px] text-[#111827]" title={book.title}>
                {book.title.length > 40
                  ? book.title.slice(0, 40) + "..."
                  : book.title}
              </div>
              <div className="text-[12px] text-[#A78BFA]">
                {authorName}
              </div>
            </div>
            
            {/* status */}
            <div>
              {isBorrowed ? (
                <div className="inline-block bg-[#FEE2E2] text-[#DC2626] text-[12px] font-medium px-3 py-1 rounded-full">Borrowed</div>
              ) : (
                <div className="inline-block bg-[#DCFCE7] text-[#16A34A] text-[12px] font-medium px-3 py-1 rounded-full">Available</div>
              )}
            </div>

            {/* garis */}
            <div className="border-t border-gray-400" />

            {/* stock & details */}
            <div className="flex items-center justify-between">
              <div className="text-[12px] text-[#6B7280]">
                Stock: {Math.max(1, Math.floor(book.download_count / 1000))}
              </div>
              <Button className="text-[12px] text-[#845CF6] border border-[#C4B5FD] rounded-lg px-3 py-1 bg-purple-50 transition">
                Details
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Bookcard