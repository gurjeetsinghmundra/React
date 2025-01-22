// Logic


const API_LINK="http://localhost:8080/products" //its const so it cant be changed by others

export const getProducts = ()=>{

    return fetch(API_LINK)
    .then(data=>data.json())
    .then(data=>data["_embedded"]["products"])
    
}

export const addProduct = (product)=>{
    
//    ( (product)=> ) assuming object of product will be given

    return fetch(API_LINK,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(product)
    }).then(data=>data.json())
    .then(data=>data)

}

// product_link is declared in product
export const getProductById=(product_link)=>{

    return fetch(product_link)
    .then(data=>data.json())
    .then(data=>data)

}

// product_id_link (we are assuming that we will receive a link)
// link ProductItem se milega
export const updateProduct = (product_id_link,product)=>{


    return fetch(product_id_link,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(product)
    }).then(data=>data.json())
    .then(data=>data)
}

// get aur delete me data nhi bhejte isliye headers aur body ki zarurat nhi
export const deleteProduct = (product_id_link)=>{
           
    return fetch(product_id_link,{method:"DELETE"})
    .then(data=>data.json())
    .then(data=>data)
}

// =================================================================

export const getProductsLowToHigh = ()=>{

    return fetch("http://localhost:8080/products/search/findByOrderByProductPriceAsc")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["products"])
    
}

export const getProductsHighToLow = ()=>{

    return fetch("http://localhost:8080/products/search/findByOrderByProductPriceDesc")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["products"])
    
}

export const getProductsAtoZ = ()=>{

    return fetch("http://localhost:8080/products/search/findByOrderByProductNameAsc")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["products"])
    
}

export const getProductsZtoA = ()=>{

    return fetch("http://localhost:8080/products/search/findByOrderByProductNameDesc")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["products"])
    
}