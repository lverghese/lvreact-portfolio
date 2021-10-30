import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import pic from '../../images/Header.JPG'
// react font awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">

  <a className="navbar-brand text-light" href="/"><img className='logo float-left' src={pic} alt='Profile'/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Resume</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Contact</a>
      </li>
    </ul>
  </div>

</nav>
    )
}

export default Nav;
