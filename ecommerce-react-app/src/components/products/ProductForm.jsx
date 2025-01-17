import React, { useEffect, useState } from 'react'
import { addProduct } from '../../services/ProductService'

function ProductForm({onAddProduct,selectedProduct}) {

      // Function to be called when form will be submitted
     let [product,setProduct] = useState({productId:'',productName:'',productDescription:'',productDescription:''})  

      const submitHandler = (e)=>
        {
            e.preventDefault(); //prevent webpage from refreshing
            addProduct({
                // on left we have variables of eclipse
                // and on right we have form names
                productId:e.target.productId.value,
                productName:e.target.productName.value,
                productDescription:e.target.productDescription.value,
                productPrice:e.target.productPrice.value,
            }).then(data=>{
                onAddProduct();
                return data;
            })
            
        }

        // ====================================================

        useEffect(()=>{
            if(selectedProduct) //in javascript if is executed when the condition is non-null or when it is true
        //    agar selectedProduct null rahega toh yeh block nhi chalega
            setProduct(selectedProduct)

        },[selectedProduct])


 // useEffect :length aur breadth ki value change hoyegi toh area of rectangle kaa diagram be change hoyega


//  To control change in input box

        const handleChange = (e) =>
        {
            console.log(e.target)
        
        }
 
    return (

        // Styling the form
        // container(to put the form in center)
        // border(for adding border to form) primary(color) border-2(thickness of border )
        // p for padding , mt(margin top) my(margin top and bottom)
        
        <div className='container  border border-primary border-2 p-3 my-3'>


            <form onSubmit={submitHandler}>
                {/* Product Id*/}
                <h1 className='bg-primary p-3 text-white text-center'>Add Product</h1>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Id</label>
                    <input type="number" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='productId'
                        value={product.productId} onChange={handleChange} /> 
                    {/*Assigning Name is very imp coz we get data through it  */}
                    {/* value={product.productId} , value that will be shown on input box  */}
                </div>

                {/* Product Name */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='productName'
                        value={product.productName}  onChange={handleChange} />

                </div>

                {/* Product Desc */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='productDescription'
                        value={product.productDescription}  onChange={handleChange} />

                </div>

                {/* Product Price */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Price</label>
                    <input type="number" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='productPrice' 
                        value={product.productPrice}  onChange={handleChange}/>

                </div>

                {/* Button to submit form */}
                <button type="submit" className="btn btn-primary">Submit</button>

                

            </form>
        </div>
    )
}

export default ProductForm