import React, { useEffect, useState } from 'react'
import Child from './Child';

// Memoize Memoization 

function Parent() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    useEffect(()=>{
        console.log("Parent Rendered")
    })

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Button Clicked {count} times</p> 
            <button onClick={increment}>Increment</button>
            <Child/>
            <hr />
        </div>



    )


}

export default Parent