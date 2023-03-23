import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <NavLink to='/' activeClassName="active-styles" exact>
      <img src="../Images/logo.png" className='logo' />
    </NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <NavLink to="/"activeClassName="active-styles"exact>
        <li class="nav-item nav-link"className="nav-link">Home</li>
        </NavLink>
        <NavLink to="/about"activeClassName="active-styles"exact>
        <li class="nav-item nav-link"className="nav-link">About</li>
        </NavLink>
        <NavLink to="/contact"activeClassName="active-styles"exact>
        <li class="nav-item nav-link"className="nav-link">Contact</li>
        </NavLink>
        <NavLink to="/services"activeClassName="active-styles"exact>
        <li class="nav-item nav-link"className="nav-link">Services</li>
        </NavLink>
        
        </ul>
       
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;