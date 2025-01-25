import React from 'react'
import { deleteProduct, getProductById, uploadProductImage } from '../../services/ProductService';

// function ProductItem({productName,productDescription,productPrice}) 
// the above is object destructuring , since the function takes 1 object , 
// by using {} we are destructuring it into 3
function ProductItem({ productName, productDescription, productPrice ,product_link, onSelectProduct, onDeleteProduct }) {

    const onSelectUpdate= async (link)=>{

        // console.log(link);
        // getProductById is from productService
       let product = await getProductById(link);
       onSelectProduct(product) //passing product as an argument
    }

    // =========================================================================
    // function to delete product

    // deleteProduct is from productService
    // then data ko promise me wrap karke bhejega
    const onSelectDelete = async(product_id_link)=>{
        // console.log("delete called")
        const deletedProduct =await deleteProduct(product_id_link)
        onDeleteProduct();
    }
    
    // =========================================================================

    return (


        <div>

            {/* using utilities (card) in bootstrap 5 */}

            <div className="col">

            <div class="card">
                <div class="card-body">
                   
                
                    <img src={product_link+"/image"} class="card-img-top" alt="..."/>

                    <h5 class="card-title">{productName}</h5>
                    <p class="card-text">{productDescription}</p>
                    <p class="card-text">Price: {productPrice}</p>

                    {/* Update Button */}
                    <button  className='btn btn-success'
                    //  onClick={onSelectUpdate(product_link)}>  //this will print all links
                    onClick={()=>onSelectUpdate(product_link)}>  
                    {/* upar prop pass kiya hai product_link */}
                    Update</button>         

{/* with arrow function , the function will only work if the button is clicked  */}
                    {/* Delete Button */}
                    <button  className='btn btn-danger'
                    // product_link is a prop which we have passed above
                    onClick={()=>onSelectDelete(product_link)}>
                        Delete</button>
                </div>
            </div>
            </div>

        </div>
    )
}

export default ProductItem