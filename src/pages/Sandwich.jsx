import React, { useState } from 'react';
import headermenu from '../components/headermenu';
import footergeneral from '../components/footergeneral';
import './Sandwich.css';

// Carrusel imágenes
import twins from '../assets/img/Sandwich/Twins.png'
import pinki from '../assets/img/Sandwich/Pinki.png'

const Inicio = () => {
  // Estado para el carrusel
  const [activeIndex, setActiveIndex] = useState(0);

  // Datos del carrusel - sandwiches recientemente agregados
  const sandwichesRecientes = [
    {
      id: 1,
      nombre: "Las Twins",
      imagen: twins,
      descripcion: "Doble Porción, Doble Disfrute"
    },
    {
      id: 2,
      nombre: "La Magnificarne",
      imagen: pinki,
      descripcion: "Mucha proteína"
    },
    {
      id: 3,
      nombre: "Sandwich 3",
      imagen: " ",
      descripcion: "Descripción"
    },
    {
      id: 4,
      nombre: "Sandwich 4",
      imagen: " ",
      descripcion: "Descipción"
    }
  ];

  // Datos del menú completo
  const menuSandwiches = [
    {
      id: 1,
      nombre: "Las Twins",
      imagen: twins,
      precio: 75.00,
      descripcion: "Doble sandwich sencillo, tocino, jamón, queso americano, lechuga y jamón."
    },
    {
      id: 2,
      nombre: "La Magnificarne",
      imagen: pinki,
      precio: 45.50,
      descripcion: "Jamón, tocino, queso americano, lechuga, jamón, jalapeño, jitomate y aceitunas "
    },
    {
      id: 3,
      nombre: "Sandwich 3",
      imagen: "",
      precio: 0.00,
      descripcion: "Descripción"
    },
    {
      id: 4,
      nombre: "Sandwich 4",
      imagen: "",
      precio: 0.00,
      descripcion: "Descripción"
    },
    {
      id: 5,
      nombre: "Sandwich 5",
      imagen: "",
      precio: 0.00,
      descripcion: "Descripción"
    },
    {
      id: 6,
      nombre: "Sandwich 6",
      imagen: "",
      precio: 0.00,
      descripcion: "Descripción"
    }
  ];

  // Datos de promociones
  const promociones = [
    {
      id: 1,
      nombre: "Promo 1",
      imagen: "",
      precioOriginal: 0.00,
      precioPromocion: 0.00,
      descripcion: "Descripción"
    },
    {
      id: 2,
      nombre: "Promo 2",
      imagen: "",
      precioOriginal: 0.00,
      precioPromocion: 0.00,
      descripcion: "Descripción"
    },
    {
      id: 3,
      nombre: "Promo 3",
      imagen: "",
      precioOriginal: 0.00,
      precioPromocion: 0.00,
      descripcion: ""
    }
  ];

  // Handlers para el carrusel
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? sandwichesRecientes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === sandwichesRecientes.length - 1 ? 0 : prev + 1));
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container-fluid p-0">
        {headermenu()}
      
      <section className="Banner text-white py-5">
        <div className="container text-center">
          <h1 className="display-2 fw-bold mb-3 text-black">Nuestros Sandwiches</h1>
          <p className="lead text-black fw-bold">Los mejores sandwiches artesanales hechos con ingredientes frescos</p>
        </div>
      </section>

      {/* Carrusel de Sandwiches Recientes */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">Sandwiches Recién Agregados</h2>
          
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div id="carouselSandwiches" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  {sandwichesRecientes.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#carouselSandwiches"
                      data-bs-slide-to={index}
                      className={index === activeIndex ? 'active' : ''}
                      aria-current={index === activeIndex ? 'true' : 'false'}
                      aria-label={`Slide ${index + 1}`}
                      onClick={() => handleIndicatorClick(index)}
                    ></button>
                  ))}
                </div>
                
                <div className="carousel-inner rounded-3">
                  {sandwichesRecientes.map((sandwich, index) => (
                    <div 
                      key={sandwich.id} 
                      className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                    >
                      <img 
                        src={sandwich.imagen} 
                        className="d-block w-100" 
                        alt={sandwich.nombre}
                        style={{ height: '400px', objectFit: 'cover' }}
                      />
                      <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                        <h5>{sandwich.nombre}</h5>
                        <p>{sandwich.descripcion}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="carousel-control-prev" 
                  type="button" 
                  onClick={handlePrev}
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button 
                  className="carousel-control-next" 
                  type="button" 
                  onClick={handleNext}
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menú de Sandwiches */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Nuestro Menú</h2>
          
          <div className="row g-4">
            {menuSandwiches.map(sandwich => (
              <div key={sandwich.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <img 
                    src={sandwich.imagen} 
                    className="card-img-top" 
                    alt={sandwich.nombre}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold text-dark">{sandwich.nombre}</h5>
                    <p className="card-text text-muted flex-grow-1">{sandwich.descripcion}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <span className="h5 text-primary mb-0">${sandwich.precio.toFixed(2)}</span>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Promociones */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-danger">Promociones Especiales</h2>
          
          <div className="row g-4">
            {promociones.map(promo => (
              <div key={promo.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow border-2 border-danger">
                  <div className="position-relative">
                    <img 
                      src={promo.imagen} 
                      className="card-img-top" 
                      alt={promo.nombre}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <span className="position-absolute top-0 start-0 bg-danger text-white px-3 py-2 rounded-end">
                      ¡Oferta!
                    </span>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold text-dark">{promo.nombre}</h5>
                    <p className="card-text text-muted flex-grow-1">{promo.descripcion}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div>
                        <span className="text-muted text-decoration-line-through me-2">
                          ${promo.precioOriginal.toFixed(2)}
                        </span>
                        <span className="h5 text-danger mb-0">
                          ${promo.precioPromocion.toFixed(2)}
                        </span>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {footergeneral()}
    </div>
  );
};

export default Inicio;