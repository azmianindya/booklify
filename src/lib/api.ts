import type { Book } from "../features/books/types/types.ts"
 
export const fetchBooks = async (): Promise<Book[]> => {
  const response = await fetch("https://gutendex.com/books/")
 
  if (!response.ok) {
    throw new Error("Gagal fetch data")
  }
 
  const data = await response.json()
  return data.results.slice(0, 6) as Book[]
}