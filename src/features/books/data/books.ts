import type { Author } from "../types/book"

export const getCoverUrl = (formats: Record<string, string>) =>
  Object.entries(formats).find(([key]) => key.startsWith("image/"))?.[1] ?? null

export const getAuthorName = (authors: Author[]) => {
  if (!authors.length) return "Unknown Author"
  const [last, first] = authors[0].name.split(", ")
  return first ? `${first} ${last}` : last
}