import React, { useEffect } from 'react'

// Memoize Memoization 

function Child() {

     useEffect(()=>{
            console.log("Child Rendered")
        })

  return (
    <div>
        <h1>Child</h1>
    </div>
  )
}

export default React.memo(Child);