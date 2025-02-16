import React, { useRef } from 'react'

function RefExample() {

    const inputOne = useRef();
    const fetchData=()=>{
        // console.log("data");
        console.log(inputOne.current)
        inputOne.current.style.color="red";
        inputCircle.current.style.borderRadius="300px";
    }
    const inputCircle =useRef();
    
  return (
    <div>
        <hr />

        {/* ref is an attribute for useRef */}
        <input type="text" ref={inputOne} />
      
        <button onClick={fetchData}>Click Here!</button>


        <div className='box'  ref={inputCircle}>

        </div>
        <button onClick={fetchData}>Make Circle</button>
    </div>
  )
}

export default RefExample