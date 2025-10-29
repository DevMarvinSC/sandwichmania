import React from 'react';
import { Link } from 'react-router-dom';
import './headermenu.css';
import logo from '../assets/img/logo.png'

function headermenu() {
    return (

        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <Link to="/" className='navbar-brand d-flex align-items-center'>
                    <img src={logo} alt="Logo" width="30" height="30" className="me-2 logo" />
                    <b>SandwichManía</b>
                </Link>

                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className='nav-link text-dark text-decoration-none'>
                                <i className="fas fa-home pe-2"></i>Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Sandwiches" className='nav-link text-dark text-decoration-none'>
                                <i className="fas fa-utensils pe-2"></i>Sándwiches
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/MenuInfantil" className='nav-link text-dark text-decoration-none'>
                                <i className="fas fa-child pe-2"></i>Menú Infantil
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/AcercaDe" className='nav-link text-dark text-decoration-none'>
                                <i className="fas fa-circle-info pe-2"></i>Sobre Nosotros
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )


}
export default headermenu;