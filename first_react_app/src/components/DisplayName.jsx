import {  useEffect, useState } from "react";


function DisplayName()
{
    let [value,setValue]=useState("Enter Name");

    let [length,setLength]=useState(10)
    let [breadth,setBreadth]=useState(5)
    
    let [area,setArea]=useState(length*breadth);

    useEffect(()=>{
        let value=setTimeout(()=>
            { setArea(length*breadth)},5000)
        //cleanup function
        return()=>{
            console.log("cleanup function")
            clearTimeout(value);
        }
       
    },[length,breadth])

    return(
        <div>
            <hr />
            <h1>Display Name</h1>
            <input type="text" value={value}
            onChange={(e)=>{
             setValue(e.target.value);
            // console.log(value);
                }} />
            <h1>{value}</h1>

            <hr />

            <input type="number" placeholder="Enter Length" value={length}
            onChange={(e)=>{
                setLength(e.target.value);
                }} 
             />
             {/* <h1>{length}</h1> */}
            <br />
            <br />
            <input type="number" placeholder="Enter Breadth" value={breadth} 
             onChange={(e)=>{
                setBreadth(e.target.value);
                }} />
            {/* <h1>{breadth}</h1> */}

            <h1>Area is: {area}</h1>


        </div>
    );
}

export default DisplayName;