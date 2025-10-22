import './footergeneral.css'
function footergeneral(){

    return(
        <div className="FooterContainer">
            <footer class="bg-dark text-light py-4 mt-5">
                <div class="container">
                    <div class="row align-items-center">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="d-flex align-items-center">
                        <div class="bg-light rounded p-2 me-3">
                            
                            <div className="LOGO" >
                            <span class="text-dark">LOGO</span>
                            </div>
                        </div>
                        <h3 class="h5 mb-0">SandwichManía</h3>
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
                            <a href="tel:+1234567890" class="text-light text-decoration-none">+52 (93) 3123-4567</a>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    

                    <hr class="my-3 bg-secondary"/>
                    
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