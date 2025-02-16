import React, { useEffect, useState } from 'react'
import { deleteProduct, getProductById, uploadProductImage } from '../../services/ProductService';
import { getCategories, setCategory } from '../../services/CategoryService';

// function ProductItem({productName,productDescription,productPrice}) 
// the above is object destructuring , since the function takes 1 object , 
// by using {} we are destructuring it into 3
function ProductItem({ productName, productDescription, productPrice, product_link, onSelectProduct, onDeleteProduct }) {

    let [categories, setCategories] = useState([])   //categories initial state is empty array
    useEffect(() => {
        fetchCategories();
    }, []); // Dependency array is correct
    

    //getCategories me jo last return kiya vo yaha pe promise me wrap karke milega
    const fetchCategories=async ()=>{
      setCategories(await getCategories())
    }

   


   
    // =================================================================================

    const onSelectUpdate = async (link) => {

        // console.log(link);
        // getProductById is from productService
        let product = await getProductById(link);
        onSelectProduct(product) //passing product as an argument
    }

    // =========================================================================
    // function to delete product

    // deleteProduct is from productService
    // then data ko promise me wrap karke bhejega
    const onSelectDelete = async (product_id_link) => {
        // console.log("delete called")
        const deletedProduct = await deleteProduct(product_id_link)
        onDeleteProduct();
    }

    // =========================================================================


    const handleCategory=(category_link,product_link)=>{
        // setCategory from categoryService
        setCategory(product_link+"/category",category_link)
    }

    return (


        <div>

            {/* using utilities (card) in bootstrap 5 */}

            <div className="col">

                <div class="card">
                    <div class="card-body">


                        <img src={product_link + "/image"} class="card-img-top" alt="..." />

                        <h5 class="card-title">{productName}</h5>
                        <p class="card-text">{productDescription}</p>
                        <p class="card-text">Price: {productPrice}</p>

                        {/* Showing Categories */}

                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle my-2" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Category
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                {
                                    // we can apply map function bcoz categories is an array
                                    //map is a function that needs function & can be applied on arrays
                                    //category is an object below
                                    categories.map((category)=>{

                                    return(<li><button class="dropdown-item" type="button"
                                    onClick={()=>{
                                        handleCategory(category._links.self.href,product_link)
                                    }}>{category.categoryName}</button></li>)

                                    })
                                }
                            </ul>
                        </div>

                        {/*  */}

                        {/* Update Button */}
                        <button className='btn btn-success '
                            //  onClick={onSelectUpdate(product_link)}>  //this will print all links
                            onClick={() => onSelectUpdate(product_link)}>
                            {/* upar prop pass kiya hai product_link */}
                            Update</button>

                        {/* with arrow function , the function will only work if the button is clicked  */}
                        {/* Delete Button */}
                        <button className='btn btn-danger ms-5'
                            // product_link is a prop which we have passed above
                            onClick={() => onSelectDelete(product_link)}>
                            Delete</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductItem