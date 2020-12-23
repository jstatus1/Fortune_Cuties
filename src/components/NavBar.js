import React from 'react'
import { Navbar } from 'react-bootstrap'

function NavBar()
{
    return (
    <div class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="/">Cookie Cuties</a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item active">
            <a class="nav-link" href="/">Cuties</a>
          </li>  
          <li class="nav-item">
            <a class="nav-link" href="/PokeDexPage">PokeDex</a>
          </li>
        </ul>
        
    </div>
      </div>
    </div>)
}


export default NavBar