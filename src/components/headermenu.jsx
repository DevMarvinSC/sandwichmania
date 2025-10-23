import React from 'react';
import './headermenu.css';

function headermenu(){
    return(
           
        <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
            
            <a class="navbar-brand" href="/">
                <b>SandwichManía</b>
            </a>
            
            
            <button class="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="/Sandwiches">
                            <i class="fa fa-utensils pe-2"></i>Sandwiches
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#!">
                            <i class="fas fa-child pe-2"></i>Menú Infantil
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Ensaladas">
                            <i class="fas fa-leaf pe-2"></i>Ensaladas
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/AcercaDe">
                            <i class="fas fa-circle-info pe-2"></i>Sobre Nosotros
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    )


}
export default headermenu;