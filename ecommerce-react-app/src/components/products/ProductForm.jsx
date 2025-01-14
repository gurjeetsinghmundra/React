import React from 'react'

function ProductForm() {
    return (

        // Styling the form
        // container(to put the form in center)
        // border(for adding border to form) primary(color) border-2(thickness of border )
        // p for padding , mt(margin top) my(margin top and bottom)
        <div className='container  border border-primary border-2 p-3 my-3'>
            <form>
                {/* Product Id*/}
                <h1 className='bg-primary p-3 text-white text-center'>Add Product</h1>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Id</label>
                    <input type="number" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='productId' />
                    {/*Assigning Name is very imp coz we get data through it  */}
                </div>

                {/* Product Name */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='productName' />

                </div>

                {/* Product Name */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='productDescription' />

                </div>

                {/* Product Price */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Price</label>
                    <input type="number" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='productPrice' />

                </div>

                {/* Button to submit form */}
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}

export default ProductForm