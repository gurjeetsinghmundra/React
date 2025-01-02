import { useState } from "react";


function Counter()
{
    let [value,setValue]=useState(0)
    const increment =()=>{
        setValue(value++);
        }
    const decrement =()=>{
        setValue(value--);
    }

    return(
        <div>
            <hr />
           <button  onClick={decrement}>Decrement</button>
           <h1>{value}</h1>
           <button  onClick={increment}>Increment</button>
        </div>
    );
}


export default Counter;