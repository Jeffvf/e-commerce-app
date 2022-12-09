import { Product } from "../shared/interfaces/product.interface"

export default function Card({data}: {data: Product}){
  return(
    <>
      <h1>{data.nome}</h1>
    </>
  )
}