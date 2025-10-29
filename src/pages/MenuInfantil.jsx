import React from 'react';
import { useEffect } from 'react';
import headermenu from '../components/headermenu';
import footergeneral from '../components/footergeneral';
import { useCarrito } from '../components/CarritoContext';
import './MenuInfantil.css';

// Importa tus imágenes para el menú infantil
import monster from '../assets/img/MenuInfantil/Mounstrito.jpeg';
import stars from '../assets/img/MenuInfantil/stars.png';
import jamonyqueso from '../assets/img/MenuInfantil/JamonYQueso.webp';
import queso from '../assets/img/MenuInfantil/Queso fundido.webp';





const MenuInfantil = () => {
  
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

  // Menú principal para niños
  const menuPrincipal = [
    {
      id: 1,
      nombre: "Sándwich Vampirito",
      imagen: monster,
      precio: 25.00,
      descripcion: "Mini sándwich de jamón y queso con pan suave, sin bordes. Incluye carita feliz con vegetales.",
      incluye: "Pan suave, jamón, queso, lechuga, tomate",
      creditos: "Pequerecetas"
    },
    {
      id: 2,
      nombre: "Estrellitas",
      imagen: stars,
      precio: 28.50,
      descripcion: "3 Mini sándwiches en forma de estrellas, sin bordes, equivalentes a 1 sándiwch y medio.",
      incluye: "Pan suave, jamón, queso, arándanos, mango, mermelada",
      creditos: "Resuelve con Bimbo"
    },
    {
      id: 3,
      nombre: "Quesito",
      imagen: queso,
      precio: 22.00,
      descripcion: "Sándwich clásico infantil de queso.",
      incluye: "Pan sin orillas, queso fundido",
      creditos: "Recetas Gratis"
    },
    {
      id: 4,
      nombre: "Jamoncito y Quesito",
      imagen: jamonyqueso,
      precio: 30.00,
      descripcion: "Sándwich Clásico Infantil de jamón y queso fundido",
      incluye: "Pan sin orillas, jamón de pavo, queso fundido",
      creditos: "Cookpad"
    }
  ];


  return (
    <div className="container-fluid p-0">
      {headermenu()}

      {/* Banner Principal */}
      <section className="banner-infantil text-white py-5">
        <div className="container text-center  text-black">
          <h1 className="display-2 fw-bold mb-3 text-black">Menú Infantil</h1>
          <p className="lead fw-bold">¡Comida divertida y saludable para los más pequeños de la casa!</p>
        </div>
      </section>

      {/* Menú Principal */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-primary">Platos Principales</h2>
          <p className="text-center text-muted mb-4">Deliciosas opciones que encantarán a los niños</p>
          
          <div className="row g-4">
            {menuPrincipal.map(plato => (
              <div key={plato.id} className="col-md-6 col-lg-3">
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={plato.imagen}
                    className="card-img-top"
                    alt={plato.nombre}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold text-dark">{plato.nombre}</h5>
                    <p className="card-text text-muted flex-grow-1">{plato.descripcion}</p>
                    
                    <div className="mb-2">
                      <small className="text-primary">
                        <i className="fas fa-info-circle me-1"></i>
                        Ingredientes: {plato.incluye}
                      </small>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <span className="h5 text-primary mb-0">${plato.precio.toFixed(2)}</span>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleAgregarAlCarrito(plato)}
                      >
                        <i className="fas fa-cart-plus me-1"></i>
                        Agregar
                      </button>
                    </div>
                    <small>Creditos: {plato.creditos}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Información Nutricional */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="fw-bold mb-4">🍎 Comprometidos con la Salud Infantil</h3>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Ingredientes frescos</li>
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Sin conservadores artificiales</li>
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Porciones adecuadas por edad</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Bajo en azúcar</li>
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Presentaciones divertidas</li>
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Opción de personalización</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="alert alert-info">
                <h5>¿Alergias o Restricciones?</h5>
                <p className="mb-0">Informa sobre alergias alimentarias. Adaptamos los platillos según necesidades especiales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {footergeneral()}
    </div>
  );
};

export default MenuInfantil;