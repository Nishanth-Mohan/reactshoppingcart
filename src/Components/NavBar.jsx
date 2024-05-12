import React from 'react'

const NavBar = ({value, setValue}) => {
  return (
    <div className="row">
        <nav className="navbar navbar-expand-lg bg-body-tertiary col-9">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">All Products</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Popular Items</a></li>
            <li><a className="dropdown-item" href="#">New Arrivals</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className="col">
    <div className="cart">
    <i className="fa fa-shopping-cart" aria-hidden="true"> Cart <b>{value}</b> </i>
    </div>

</div>
    </div>
  )
}

export default NavBar