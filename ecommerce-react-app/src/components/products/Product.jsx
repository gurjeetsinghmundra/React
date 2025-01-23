import React, { useEffect, useState } from 'react'
import { getProducts, getProductsAtoZ, getProductsHighToLow, getProductsLowToHigh, getProductsZtoA } from '../../services/ProductService'
import ProductItem from './ProductItem'
import ProductForm from './ProductForm'



// if we dont add {} then
function Product({queryFromNavbar}) {


  //products ke andhar array(empty) ajayega , aur usko aage change karne ke liye setProduct use karenge
  let [products, setProducts] = useState([])
  let [selectedProduct, setSelectedProduct] = useState(null); //or we can pass {} (object which has nothing)
  // selectedProduct is a variable with null value
  // setSelectedProduct is a function that change the value of selectedProduct
  // kissi ki value baar baar change hoo rhi hai toh useState lena hai

  let [searchQuery,setSearchQuery] = useState('')

  useEffect(() => {
    getProducts() //return promise
      .then(data => {
        setProducts(data)
        // console.log(data);

      })

      if(queryFromNavbar)
      {
        setSearchQuery(queryFromNavbar)
      }
  }, [queryFromNavbar]) //atleast 1 baar yeh chalega


  // To refresh all product when you add product

  const refreshProducts = () => {

    getProducts().then(data => {
      setProducts(data);
    })

  }

  // To set selected product

  const handleSelectProduct = (selectedProduct) => {

    setSelectedProduct(selectedProduct)
    console.log(selectedProduct)
  }

  // To sort data

  const sort = async (choice) => {

    switch (choice) {
      case 1:
        setProducts(await getProductsLowToHigh());
        break;
      case 2:
        setProducts(await getProductsHighToLow());
        break;
      case 3:
        setProducts(await getProductsAtoZ());
        break;
      case 4:
        setProducts(await getProductsZtoA());
        break;

    }

  }

  return (
    <div>

      {/* Grid System */}


      <div className="container">
        <div className="row">
          <div className="col">
            {/* Product Form:Start */}
            <ProductForm
              onAddProduct={refreshProducts}
              onUpdateProduct={refreshProducts}
              selectedProduct={selectedProduct}
              //left side is a property (prop)from productForm.jsx
              //right side is value we have declared above
              setSelectedProduct={setSelectedProduct}
            />
            {/* Product Form:End */}
          </div>


          <div className="col">

            {/* Showing Number Of Products: Start  */}

            {/* products is an array so we can use the length function
            <button type="button" className="btn btn-primary">
              Total Products : <span className="badge bg-secondary">{products.length}</span>
            </button> */}

            {/* Showing number of products :End*/}

            {/* Sort : Start */}
            {/* logic on number 48 on this page */}
            {/* <ul className="list-group my-3">
              <li className="list-group-item" onClick={() => { sort(1) }}>Low To High</li>
              <li className="list-group-item" onClick={() => { sort(2) }}>High To Low</li>
              <li className="list-group-item" onClick={() => { sort(3) }}>A-Z</li>
              <li className="list-group-item" onClick={() => { sort(4) }}>Z-A</li>
            </ul> */}

            <div class="dropdown">
              <button class="btn btn-primary dropdown-toggle ms-auto " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Total Products : <span className="badge bg-secondary">{products.length}</span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li onClick={() => { sort(1) }} ><a class="dropdown-item" href="#" >Low To High</a></li>
                <li onClick={() => { sort(2) }}><a class="dropdown-item" href="#" >High To Low</a></li>
                <li onClick={() => { sort(3) }}><a class="dropdown-item" href="#">A-Z</a></li>
                <li onClick={() => { sort(4) }}><a class="dropdown-item" href="#">Z-A</a></li>
              </ul>
            </div>
              <hr />
            {/* Sort : End */}

            {/*========================== Search ======================================*/}
            <div class="mb-3 my-2">

              <input type="email" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp" 
                onChange={(e)=>{setSearchQuery(e.target.value)}}/>
                {/* current input box kaa target value fetch karega */}
              <div id="emailHelp" class="form-text">Enter search query</div>
            </div>
            {/* =====================(search End)====================================== */}


            {/* Displaying Products : Start */}
            {/* Grid Cards */}
            {/* 2 cards ke beach ka jagah is called gutter(g) */}
            <div className="row row-cols-1 row-cols-md-2 g-4 my-2">  {/*my-2 (margin top and bottom) add by me */}
             
             {/* includes check the word/letter is present or not */}

              {products.filter(p=>{
                return p.productName.toLowerCase()
                .includes(searchQuery.toLowerCase())
              }).map((p) => {
                return (
                  <ProductItem
                    productName={p.productName}
                    productDescription={p.productDescription}
                    productPrice={p.productPrice}
                    product_link={p._links.self.href}  //to get product link(view in postman)
                    onSelectProduct={handleSelectProduct}
                    onDeleteProduct={refreshProducts}
                  />
                )
              })}
              {/* map me ek ek karke product milege */}

            </div>

            {/* Displaying Products : End */}

          </div>

        </div>
      </div>

      <input type="text" />

    </div>
  )
}

export default Product