import React, { useContext } from 'react'
import { userContext } from './A'

function E() {

    const {username}=useContext(userContext)
    
  return (
    <div>E {username}</div>
  )
}

export default E