export type Author = {
  name: string
  birth_year: number | null
  death_year: number | null
}
 
export type Book = {
  id: number
  title: string
  authors: Author[]
  formats: Record<string, string>
  download_count: number
}