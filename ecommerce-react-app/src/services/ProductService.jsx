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

export const getProductById=(product_link)=>{

    return fetch(product_link)
    .then(data=>data.json())
    .then(data=>data)

}


export const updateProduct = (product_id_link,product)=>{


    return fetch(product_id_link,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(product)
    })
}
