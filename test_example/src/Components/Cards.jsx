import React from 'react'
import logo from '../../src/logo.svg'
function Cards({title,description}) {
  return (
    <div>
      <div class="card-group">
  <div class="card">
    <img src={logo} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{description}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  
</div>
    </div>
  )
}

export default Cards
