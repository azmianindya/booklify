interface BookHeaderProps {
  onAddBook?: () => void
}

const BookHeader = ({ onAddBook }: BookHeaderProps) => {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 mb-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[30px] font-bold text-[#111827]">Library Books</div>
          <div className="text-[14px] text-[#6B7280] mt-1">Manage your library collections</div>
        </div>

        <button 
          onClick={onAddBook}
          className="h-11 px-5 bg-[#4F46E5] text-white rounded-xl font-medium"
        >
          + Add Book
        </button>
      </div>
    </div>
  )
}

export default BookHeader