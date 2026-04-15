import React from 'react'
import { Link } from 'react-router-dom';


function Products() {
    const products = [
        {
            id:1,
            name:"iphone 17"
        },
        {
            id:2,
            name:"iphone 16"
        },
        {
            id:3,
            name:"iphone 15"
        }
    ]
     
  return (
    <div>
        {
            products.map(product => (
                <Link to={`/products/${product.id}`}>{product.name}</Link>
            ))
        }
    </div>
  )
}

export default Products;