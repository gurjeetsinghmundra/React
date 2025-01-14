import React from 'react'

// function ProductItem({productName,productDescription,productPrice}) 
// the above is object destructing , since the function takes 1 object , 
// by using {} we are destructing it into 3
function ProductItem({productName,productDescription,productPrice}) {
    return (
        <div>

            {/* using utilities (card) in bootstrap 5 */}

            <div className="col">

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{productName}</h5>
                    <p class="card-text">{productDescription}</p>
                    <p class="card-text">Price: {productPrice}</p>
                    <button  className='btn btn-success'>Update</button>
                    <button  className='btn btn-danger'>Delete</button>
                </div>
            </div>
            </div>

        </div>
    )
}

export default ProductItem