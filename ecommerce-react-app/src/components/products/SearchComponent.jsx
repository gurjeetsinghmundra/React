import React, { useState } from 'react'
import Navbar from '../Navbar'
import Product from './Product'

function SearchComponent() {

    let [searchQuery,setSearchQuery] = useState('');


    // navbar ka data queryFromNavbar me pass hoyega
    const handleSearchQuery = (queryFromNavbar)=>{

        setSearchQuery(queryFromNavbar);
        console.log("New query from navbar::::",searchQuery)
    }

    // handleSearchQuery is a prop and usme joh store hoyega woh navbar function me pass karna hai
    // function Navbar({handleSearchQuery}) 

  return (
    <div>
        <Navbar handleSearchQuery={handleSearchQuery}/>
        <Product queryFromNavbar={searchQuery}/>
    </div>
  )
}

export default SearchComponent