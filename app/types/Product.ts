export interface Product{
    id: number
    title: string
    price: number
    description: string
    catergory: string
    image: string
    rating: {
        rate: number
        count: number
    }
}
