import type { Book } from "../features/books/types/types"
 
export const fetchBooks = async (): Promise<Book[]> => {
  const res = await fetch("https://gutendex.com/books/")
  if (!res.ok) throw new Error("Gagal fetch data")
  const data = await res.json()
  return data.results
}