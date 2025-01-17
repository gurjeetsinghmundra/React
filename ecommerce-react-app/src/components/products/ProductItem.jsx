import React from 'react'
import { getProductById } from '../../services/ProductService';

// function ProductItem({productName,productDescription,productPrice}) 
// the above is object destructing , since the function takes 1 object , 
// by using {} we are destructing it into 3
function ProductItem({ productName, productDescription, productPrice ,product_link, onSelectProduct }) {

    const onSelectUpdate= async (link)=>{

        // console.log(link);
       let product = await getProductById(link);
       onSelectProduct(product) //passing product as an argument
    }

    

    return (
        <div>

            {/* using utilities (card) in bootstrap 5 */}

 

            <div className="col">

                

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{productName}</h5>
                    <p class="card-text">{productDescription}</p>
                    <p class="card-text">Price: {productPrice}</p>

                    {/* Update Button */}
                    <button  className='btn btn-success'
                    //  onClick={onSelectUpdate(product_link)}>  //this will print all links
                    onClick={()=>onSelectUpdate(product_link)}>  
                    Update</button>         

{/* with arrow function , the function will only work if the button is clicked  */}
                    {/* Delete Button */}
                    <button  className='btn btn-danger'>Delete</button>
                </div>
            </div>
            </div>

        </div>
    )
}

export default ProductItem