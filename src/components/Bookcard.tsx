// components/BookCard.tsx

import { useEffect, useState } from "react"
import { fetchBooks } from "../lib/api"
import { getCoverUrl, getAuthorName } from "../features/books/data/books"
import type { Book } from "../features/books/types/types"

const BookCard = () => {

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
      <div className="flex items-center justify-center h-64 text-gray-400 text-sm">
        Memuat buku...
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64 text-red-400 text-sm">
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
          <div
            key={book.id}
            className="bg-white border border-[#F3F4F6] rounded-[20px] p-5 shadow-sm flex flex-col gap-6">

            {/* cover */}
            <div>
              <img
                src={coverUrl ?? ""}
                alt={book.title}
                className="w-full h-60 rounded-xl object-cover object-top" />
            </div>

            {/* title dan author */}
            <div className="flex flex-col gap-1">
              <div className="font-semibold text-[14px] text-[#111827] leading-snug" title={book.title}>
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
                <div className="inline-block bg-[#FEE2E2] text-[#DC2626] text-[12px] font-medium px-3 py-1 rounded-full">
                  Borrowed
                </div>
              ) : (
                <div className="inline-block bg-[#DCFCE7] text-[#16A34A] text-[12px] font-medium px-3 py-1 rounded-full">
                  Available
                </div>
              )}
            </div>

            {/* garis */}
            <div className="border-t border-[#F3F4F6]"></div>

            {/* bawah */}
            <div className="flex items-center justify-between">
              <div className="text-[12px] text-[#6B7280]">
                Stock: {Math.max(1, Math.floor(book.download_count / 1000))}
              </div>
              <div className="text-[12px] text-[#8B5CF6] border border-[#C4B5FD] rounded-lg px-3 py-1 cursor-pointer hover:bg-purple-50 transition">
                Details
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default BookCard