import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import pic from '../../images/Header.JPG'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <a className="navbar-brand text-light" href="/"><img className='logo' src={pic} alt='Profile'/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Link</a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Nav;
