import { getCoverUrl, getAuthorName } from "../data/books"
import { getStockStatus } from "../data/stocks"
import type { Book } from "../types/book"
import { Button } from "@heroui/react"

interface BookCardProps {
  book: Book
}

const BookCard = ({ book }: BookCardProps) => {
  const coverUrl = getCoverUrl(book.formats)
  const authorName = getAuthorName(book.authors)
  const { status, stock } = getStockStatus(book.download_count)

  return (
    <div className="flex flex-col bg-white border border-[#F3F4F6] rounded-[20px] p-5 gap-6 shadow-sm">
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
        {status === 'borrowed' ? (
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
          Stock: {stock}
        </div>
        <Button className="text-[12px] text-[#845CF6] border border-[#C4B5FD] rounded-lg px-3 py-1 bg-purple-50 transition">
          Details
        </Button>
      </div>
    </div>
  )
}

export default BookCard