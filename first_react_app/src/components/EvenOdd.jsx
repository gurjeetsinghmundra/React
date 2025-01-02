import { useEffect, useState } from "react";


function EvenOdd(){

    let [inputValue,setInputValue]=useState(1)

    //side effect (ek element ke change hone pe dusra change ho raha hai)
    //useEffect 2nd hook after useState

    let [answer,setAnswer]=useState("odd")

    useEffect(()=>{
        let v=parseInt(inputValue);
        if(v%2==0)
        {
            setAnswer("Even");
        }
        else
        {
            setAnswer("Odd");
        }
        //console.log("EvenOdd");
    },[inputValue])

    return(
        <div>
            <hr />
            <input type="number" value={inputValue}
            onChange={(e)=>{
                setInputValue(e.target.value);
                // console.log(inputValue);
            }} />
            <h1>{inputValue}</h1>
            {/* <button>Submit</button> */}
            <h1>{answer}</h1>
            
        </div>
    );
}

export default EvenOdd;