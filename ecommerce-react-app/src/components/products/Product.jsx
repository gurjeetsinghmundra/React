import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/ProductService'
import ProductItem from './ProductItem'
import ProductForm from './ProductForm'


function Product() {


  //products ke andhar array(empty) ajayega , aur usko aage change karne ke liye setProduct use karenge
  let [products, setProducts] = useState([])


  useEffect(() => {
    getProducts() //return promise
      .then(data => {
        setProducts(data)
        // console.log(data);
      })
  }, []) //atleast 1 baar yeh chalega


// To refresh all product when you add product

  const refreshProducts=()=>{

    getProducts().then(data=>{
      setProducts(data);
    })

  }




  return (
    <div>

      {/* Grid System */}

      <div class="container">
        <div class="row">
          <div class="col">
           {/* Product Form:Start */}
            <ProductForm onAddProduct={refreshProducts} />
            {/* Product Form:End */}
          </div>
          <div class="col">
            
      {/* Displaying Products : Start */}
      {/* Grid Cards */}
      {/* 2 cards ke beach ka jagah is called gutter(g) */}
      <div class="row row-cols-1 row-cols-md-2 g-4 my-2">  {/*my-2 (margin top and bottom) add by me */}
        {products.map((p) => {
          return (
            <ProductItem
              productName={p.productName}
              productDescription={p.productDescription}
              productPrice={p.productPrice}
              product_link={p._links.self.href}  //to get product link(view in postman)

            />
          )
        })}
        {/* map me ek ek karke product milege */}

      </div>

      {/* Displaying Products : End */}

          </div>

        </div>
      </div>
      
      <input type="text"  />

    </div>
  )
}

export default Product