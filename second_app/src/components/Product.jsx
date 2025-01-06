import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    const {id}=useParams()
  return (
    <div>Product
          <p>Id fetched from Route {id}</p>
    </div>
  )
}

export default Product