import React from 'react';
import { useNavigate } from 'react-router-dom';
import Headermenu from "../components/headermenu";
import Footergeneral from "../components/footergeneral";
import './Home.css';

import pinki from '../assets/img/Sandwich/Pinki.png'

function Home() {
  const navigate = useNavigate();

  // Datos de opiniones de usuarios
  const opiniones = [
    {
      id: 1,
      nombre: "María González",
      estrellas: 5,
      opinion: "Los mejores sandwiches que he probado. Ingredientes siempre frescos y el pan artesanal es increíble.",
      fecha: "15 Nov 2024"
    },
    {
      id: 2,
      nombre: "Carlos Rodríguez",
      estrellas: 4,
      opinion: "Excelente servicio y calidad. El menú para niños es perfecto para mis hijos.",
      fecha: "2 Dic 2024"
    },
    {
      id: 3,
      nombre: "Ana Martínez",
      estrellas: 5,
      opinion: "Las ensaladas son deliciosas y frescas. Perfectas para un almuerzo saludable.",
      fecha: "8 Ene 2025"
    },
    {
      id: 4,
      nombre: "Javier López",
      estrellas: 5,
      opinion: "La combinación de sabores en sus sandwiches es única. ¡Mi lugar favorito!",
      fecha: "20 Ene 2025"
    }
  ];

  // Función para renderizar estrellas
  const renderEstrellas = (numero) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={index < numero ? "text-warning" : "text-muted"}
      >
        ★
      </span>
    ));
  };

  // Función para navegar al menú
  const handleVerMenu = () => {
    navigate('/Sandwiches');
  };

  const handleVerEnsaladas = () => {
    navigate('/Ensaladas');
  };
  const handleVerMenuInfantil = () => {
    navigate('/MenuInfantil');
  };

  return (
    <div className="HomeContainer">
      <Headermenu />
      
      {/* Sección de Bienvenida */}
      <section className="hero-section text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4 text-dark">
                Bienvenido a <span className="text-dark">SandwichManía</span>
              </h1>
              <p className="lead mb-4 text-black">
                En SandwichManía nos especializamos en crear los sandwiches más deliciosos 
                y creativos. Utilizamos ingredientes frescos y de la más alta calidad para 
                brindarte una experiencia única en cada bocado.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-warning btn-lg" onClick={handleVerMenu}>
                  Ver Menú Completo
                </button>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <img 
                src={pinki} 
                alt="Sandwich delicioso" 
                className="imagenpinki img-fluid rounded-3 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="services-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark">Nuestros Servicios</h2>
            <p className="lead text-muted">Descubre todo lo que tenemos para ofrecerte</p>
          </div>
          
          <div className="row g-4">
            {/* Sandwiches */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-bread-slice text-primary fs-2"></i>
                  </div>
                  <h4 className="fw-bold text-dark">Sandwiches Artesanales</h4>
                  <p className="text-muted">
                    Ofrecemos una amplia variedad de sandwiches preparados con pan artesanal 
                    fresco y ingredientes premium. Desde clásicos hasta creaciones únicas.
                  </p>
                  <ul className="list-unstyled text-start">
                    <li><i className="fas fa-check text-success me-2"></i>Ingredientes frescos</li>
                    <li><i className="fas fa-check text-success me-2"></i>Pan artesanal diario</li>
                    <li><i className="fas fa-check text-success me-2"></i>Opciones personalizadas</li>
                  </ul>
                  <button className='btnaccion btn btn-outline-light btn-lg text-dark' onClick={handleVerMenu}>Ver Sándwiches</button>
                </div>
              </div>
            </div>

            {/* Menú para Niños */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-child text-success fs-2"></i>
                  </div>
                  <h4 className="fw-bold text-dark">Menú para Niños</h4>
                  <p className="text-muted">
                    Menú especial diseñado para los más pequeños. Porciones adecuadas y 
                    opciones divertidas que encantarán a tus hijos.
                  </p>
                  <ul className="list-unstyled text-start">
                    <li><i className="fas fa-check text-success me-2"></i>Porciones infantiles</li>
                    <li><i className="fas fa-check text-success me-2"></i>Opciones saludables</li>
                    <li><i className="fas fa-check text-success me-2"></i>Presentación divertida</li>
                  </ul>
                  <button className='btnaccion btn btn-outline-light btn-lg text-dark' onClick={handleVerMenuInfantil}>Ver Menú Infantil</button>
                </div>
              </div>
            </div>

            {/* Ensaladas */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-leaf text-info fs-2"></i>
                  </div>
                  <h4 className="fw-bold text-dark">Ensaladas Frescas</h4>
                  <p className="text-muted">
                    Ensaladas preparadas al momento con vegetales frescos y aderezos 
                    caseros. Perfectas para una comida ligera y saludable.
                  </p>
                  <ul className="list-unstyled text-start">
                    <li><i className="fas fa-check text-success me-2"></i>Vegetales frescos</li>
                    <li><i className="fas fa-check text-success me-2"></i>Aderezos caseros</li>
                    <li><i className="fas fa-check text-success me-2"></i>Opciones proteicas</li>
                  </ul>
                  <button className='btnaccion btn btn-outline-light btn-lg text-dark'onClick={handleVerEnsaladas}>Ver Ensaladas</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Opiniones */}
      <section className="testimonials-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark">Lo que Dicen Nuestros Clientes</h2>
            <p className="lead text-muted">Experiencias reales de nuestros comensales</p>
          </div>
          
          <div className="row g-4">
            {opiniones.map(opinion => (
              <div key={opinion.id} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h6 className="fw-bold mb-0">{opinion.nombre}</h6>
                    <div className="text-warning mb-3">
                      {renderEstrellas(opinion.estrellas)}
                    </div>
                    <p className="card-text text-muted mb-3">"{opinion.opinion}"</p>
                    <div className="d-flex align-items-center">
                      <div>
                        <small className="text-muted">{opinion.fecha}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Llamada a la acción */}
      <section className="cta-section bg-dark text-white py-5">
        <div className="container text-center">
          <h3 className="fw-bold mb-3">¿Listo para probar nuestros sandwiches?</h3>
          <p className="lead mb-4">Haz tu pedido ahora y disfruta de la mejor experiencia gastronómica</p>
          <button className="btn btn-outline-light btn-lg" onClick={handleVerMenu}>
            Ver Menú Completo
          </button>
        </div>
      </section>

      <Footergeneral />
    </div>
  );
}

export default Home;