

const API_Link = "http://localhost:8080/category";

export const getCategories=()=>{

    return fetch(API_Link)
    .then(data=>data.json())
    .then(data=>data["_embedded"]["categories"])
    
}

export const setCategory=(product_link,category_link)=>{
    return fetch(product_link,
        {method:"PUT",headers:{
            "Content-Type":"text/uri-list"
        },body:category_link})
        
}