import { useEffect, useState } from "react"
import CardItem from "./CardItem";
import Prealoader from "./Help/Prealoader";
import axios from 'axios';

export interface Product {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: {
    count: number
    rate: number
  }
  title: string
}


export default function Products() {
  
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    axios.get<Product[]>('https://fakestoreapi.com/products').then(res => setData(res.data))
      
    return () => setData([]);
  }, [])
  
  return (
    <div className="content">
      <div className=" container">
        {data?.length ? (
          <section className="card-list">
              {data.map(item => (
                  <CardItem key={item.id} {...item}/>
              ))}
          </section>
        ) : <Prealoader/>}
      </div>
    </div>
  )
}
