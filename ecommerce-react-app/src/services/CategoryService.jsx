

const API_Link = "http://localhost:8080/category";

export const getCategories=()=>{

    return fetch(API_Link)
    .then(data=>data.json())
    .then(data=>data["_embedded"]["categories"])
    
}