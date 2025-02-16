import React, { createContext, useState } from 'react'
import B from './B'
import E from './E'

export const userContext= createContext()
// Instead of Prop Drilling Concept we can use createContext

function A() {

    // Prop Drilling Concept

  const[name,setName]  = useState("Gurjeet")

  return (
    <div>A
        {/* Whatever is wrapped inside the provider will get all data from parent provider */}
        <userContext.Provider value={{"username":name,"age":21,"address":"Mumbai"}}>

        <B/>
        <E/>
        </userContext.Provider>
        
    </div>
  )
}

export default A