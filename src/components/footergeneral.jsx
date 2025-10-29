import { Link } from "react-router-dom";
import logo from '../assets/img/logo.png'
function footergeneral() {

    return (
        <div className="FooterContainer">
            <footer class="bg-dark text-light py-4 mt-5">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-4 mb-3 mb-md-0">
                            <div class="d-flex align-items-center">
                                <Link to="/" className='navbar-brand d-flex align-items-center'>
                                    <img src={logo} alt="Logo" width="30" height="30" className="me-2 logo" />
                                    <b>SandwichManía</b>
                                </Link>
                            </div>
                        </div>

                        <div class="col-md-4 mb-3 mb-md-0">
                            <div class="d-flex justify-content-center">
                                <a href="#!" class="text-light me-3">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#!" class="text-light me-3">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="#!" class="text-light me-3">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#!" class="text-light">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="d-flex justify-content-md-end justify-content-center">
                                <div class="text-center text-md-end">
                                    <p class="mb-1">
                                        <i class="fas fa-phone me-2"></i>
                                        <a href="tel:+529371445137" class="text-light text-decoration-none">+52 9371445137</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <hr class="my-3 bg-secondary" />

                    <div class="row">
                        <div class="col-12 text-center">
                            <p class="mb-0 small">Propuesta educativa sin fines de lucro. Derechos reservados 2025</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default footergeneral;