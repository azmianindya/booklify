type GetBookListRequest = {
    page?: number
}

type BookItem = {
    id: number
    title: string
    authors: {
        name: string
    }[]
    formats: {
        'image/jpeg'?: string
        'image/png'?: string
    }
}

type GetBookListResponse = {
    count: number
    next: string | null
    previous: string | null
    results: BookItem[]
}

export const fetchBooksFromAPI = async (
    params: GetBookListRequest
): Promise<GetBookListResponse> => {
    try {
        console.log("Mulai Request...")
        const res = await fetch(`https://gutendex.com/books/?page=${params.page}`)
        if (!res.ok) throw new Error("Gagal fetch data")
        return res.json()
    } catch (error) {
        console.error('Error fetching books:', error)
        throw error
    }
}