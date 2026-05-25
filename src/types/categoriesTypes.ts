


type Category = {
    id: string
    name: string
    description: string
}

type FormCategory = {
    name: string
    description: string
}

type Categories = Record<string, Category>


export type { Category, Categories, FormCategory }