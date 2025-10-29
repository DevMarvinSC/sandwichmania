import React, { useState } from 'react';
import { useEffect } from 'react';
import headermenu from '../components/headermenu';
import footergeneral from '../components/footergeneral';
import { useCarrito } from '../components/CarritoContext';
import './Sandwich.css';

// Carrusel imágenes
import twins from '../assets/img/Sandwich/Twins.png'
import pinki from '../assets/img/Sandwich/Pinki.png'
import huevo from '../assets/img/Sandwich/Sandwich de huevo.jpg'
import polloaguacate from '../assets/img/Sandwich/Ensaladadepollo y aguacatejpg.jpg'
import chivito from '../assets/img/Sandwich/Chivito.jpg'
import garbanzos from '../assets/img/Sandwich/garbanzos.jpg'

//Ofertas
import atun from '../assets/img/Sandwich/Atun.jpg'
import salmon from '../assets/img/Sandwich/salmonymanzanas.jpg'
import quesos from '../assets/img/Sandwich/cuatroquesosysalsa.jpg'

const Inicio = () => {

  useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }, []);

  const { agregarProducto } = useCarrito();

  const handleAgregarAlCarrito = (producto) => {
    agregarProducto(producto);
  };

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
      nombre: "Sándwich de Huevo",
      imagen: huevo,
      descripcion: "Huevo, Aguacate, Tomates cherry, rúcula y queso."
    },
    {
      id: 4,
      nombre: "Pollo y Aguacate",
      imagen: polloaguacate,
      descripcion: "Pechuga de pollo, aguacate, cebolla, mayonesa y aceite de oliva."
    }
  ];

  // Datos del menú completo
  const menuSandwiches = [
    {
      id: 1,
      nombre: "Las Twins",
      imagen: twins,
      precio: 75.00,
      descripcion: "Doble sandwich sencillo, tocino, jamón, queso americano, lechuga y jamón.",
      creditos: "SandwichManía"
    },
    {
      id: 2,
      nombre: "La Magnificarne",
      imagen: pinki,
      precio: 45.50,
      descripcion: "Jamón, tocino, queso americano, lechuga, jamón, jalapeño, jitomate y aceitunas.",
      creditos: "SándwichManía"
    },
    {
      id: 3,
      nombre: "Sándwich de Huevo",
      imagen: huevo,
      precio: 24.99,
      descripcion: "Huevo, Aguacate, Tomates cherry, rúcula y queso.",
      creditos: "Gourmet.cl"
    },
    {
      id: 4,
      nombre: "Pollo y aguacate",
      imagen: polloaguacate,
      precio: 39.99,
      descripcion: "Pechuga de pollo, aguacate, cebolla, mayonesa y aceite de oliva.",
      creditos: "Philippe Saez -  Directo al paladar"
    },
    {
      id: 5,
      nombre: "Chivito",
      imagen: chivito,
      precio: 44.99,
      descripcion: "Sándwich de Uruguay, Pan tipo chapata, filete de ternera, tomate, lechuga, aceitunas, jamón y huevo.",
      creditos: "Pakus - Directo al paladar"
    },
    {
      id: 6,
      nombre: "Sándwich Ensalada de Garbanzos",
      imagen: garbanzos,
      precio: 19.99,
      descripcion: "Garbanzos, zanahoria, cebolleta, apio, yogurt, limón, repollo y pimienta.",
      creditos: "Liliana Fuchs - Directo al Paladar"
    }
  ];

  // Datos de promociones
  const promociones = [
    {
      id: 1,
      nombre: "Sándwich de Atún",
      imagen: atun,
      precioOriginal: 21.90,
      precioPromocion: 16.49,
      descripcion: "Un clásico: Atún, mayonesa, cilantro, cebolla morada, pimiento rojo, limón.",
      creditos: "Miguel Ayuso - Directo al paladar"
    },
    {
      id: 2,
      nombre: "Salmón y Manzana",
      imagen: salmon,
      precioOriginal: 29.90,
      precioPromocion: 17.90,
      descripcion: "Pan integral, salmón, aguacate, queso crema, tomates cherry, manzanas, limón y germinado de alfalfa.",
      creditos: "tipsdemadre.com"
    },
    {
      id: 3,
      nombre: "4 Quesos y Salsa BBQ",
      imagen: quesos,
      precioOriginal: 38.90,
      precioPromocion: 30.00,
      descripcion: "Quesos: parmesano, cheddar, gruyer y mozarela",
      creditos: "tipsdemadre.com"
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
          <h1 className="display-2 fw-bold mb-3 text-black">Nuestros Sándwiches</h1>
          <p className="lead text-black fw-bold">Los mejores sándwiches artesanales hechos con ingredientes frescos</p>
        </div>
      </section>

      {/* Carrusel de Sandwiches Recientes */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">Sándwiches Recién Agregados</h2>

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
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleAgregarAlCarrito(sandwich)}
                      >
                        <i className="fas fa-cart-plus me-1"></i>
                        Agregar
                      </button>
                    </div>
                    <small className="text-muted mt-2">Creditos: {sandwich.creditos}</small>
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
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleAgregarAlCarrito({
                          ...promo,
                          precio: promo.precioPromocion // Usar precio de promoción
                        })}
                      >
                        <i className="fas fa-cart-plus me-1"></i>
                        Agregar
                      </button>
                    </div>
                    <small>Creditos: {promo.creditos}</small>
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