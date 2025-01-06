// rfce is a shortcut to create function based component

import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'



function About() {
 
  let[searchParam,setSearchParams] = useSearchParams(); //this will return array
  // console.log(searchParam); // will print 2 times coz of react strict mode

  const navigate = useNavigate(); //it will redirect 
  const home= useNavigate(); 
  console.log(searchParam.get("city"));
  return (
    <div>
        
   <h1>About</h1> 
   {/* here we need to mention the page on which we want to redirect */}
    <button onClick={()=>navigate("/contact/1")}>Click Here</button> 
    <br />
    <br />
    <button onClick={()=>home("/")}>Home</button>
    </div>
  )
}

export default About

