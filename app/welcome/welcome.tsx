import { useEffect, useState } from "react"
import { ProductCard } from "~/components/ProductCard"
import type { Product } from "~/types/Product"


//TODO - #1 Typescript support. #2

export function Welcome() {


  const [productList, setProductList] = useState<Product[]>(
    [{
      id: 0,
      title: "",
      price: 0,
      description: "",
      catergory: "",
      image: "",
      rating: {
        rate: 0,
        count: 0
      }
    }]
  )

  // on component creation
  useEffect(() => {
     console.log("Created - Hello world!")

     //FETCH
     async function fetchData() {
       const result = await fetch("https://fakestoreapi.com/products")
       const products: Product[] = await result.json()

       setProductList(products)
       
     }

     fetchData()
  }, []) // RUN ONCE


  return (
   <div className="welcome-container">
    
    {/** Loop through products */}
    {productList.map(({id, title, price, description, catergory, image, rating}) => (
      <ProductCard
        key={id}
        id = {id}
        title = {title}
        price = {price}
        description = {description}
        catergory = {catergory}
        image = {image}
        rating={rating}
        /> 
    )
    )}
  </div>
  )
}