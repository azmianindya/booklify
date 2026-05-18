import type { Author } from "../types/types"

export const getCoverUrl = (formats: Record<string, string>): string | null => {
  const key = Object.keys(formats).find((item) =>
    item.startsWith("image/")
  )
  return key ? formats[key] : null
}

export const getAuthorName = (authors: Author[]): string => {
  if (authors.length === 0) {
    return "Unknown Author"
  }

  const raw = authors[0].name
  const parts = raw.split(", ")

  return parts.length === 2
    ? `${parts[1]} ${parts[0]}`
    : raw
}