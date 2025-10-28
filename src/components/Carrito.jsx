import React, { useState } from 'react';
import { useCarrito } from './CarritoContext';
import { useNavigate } from 'react-router-dom';
import nadaaqui from '../assets/img/Carrito/nadaaqui.gif'

const Carrito = () => {
  const { carrito, eliminarProducto, actualizarCantidad, vaciarCarrito, total } = useCarrito();
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const navigate = useNavigate();

  const handleCantidadChange = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    actualizarCantidad(id, nuevaCantidad);
  };

  const handleFinalizarCompra = () => {
    // Aquí puedes redirigir a la página de checkout
    navigate('/checkout');
    setMostrarCarrito(false);
  };

  return (
    <>
      {/* Botón flotante del carrito */}
      <button
        className="btn btn-primary position-fixed"
        style={{
          bottom: '20px',
          right: '20px',
          zIndex: 1050,
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
        }}
        onClick={() => setMostrarCarrito(!mostrarCarrito)}
      >
        <i className="fas fa-shopping-cart"></i>
        {carrito.items.length > 0 && (
          <span 
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: '0.7rem' }}
          >
            {carrito.items.reduce((sum, item) => sum + item.cantidad, 0)}
          </span>
        )}
      </button>

      {/* Modal del carrito */}
      {mostrarCarrito && (
        <div 
          className="modal show d-block" 
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setMostrarCarrito(false)}
        >
          <div 
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Tu Carrito de Compras</h5>
                <button 
                  type="button" 
                  className="btn-close"
                  onClick={() => setMostrarCarrito(false)}
                ></button>
              </div>
              
              <div className="modal-body">
                {carrito.items.length === 0 ? (
                  <div className="text-center py-4">
                    <img src={nadaaqui} alt="agrega algo" />
                    <p className="text-muted">Tu carrito está vacío</p>
                  </div>
                ) : (
                  <>
                    {carrito.items.map(item => (
                      <div key={item.id} className="card mb-3">
                        <div className="card-body">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <img 
                                src={item.imagen} 
                                alt={item.nombre}
                                className="img-fluid rounded"
                                style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                              />
                            </div>
                            <div className="col-md-4">
                              <h6 className="mb-0">{item.nombre}</h6>
                              <small className="text-muted">${item.precio.toFixed(2)}</small>
                            </div>
                            <div className="col-md-3">
                              <div className="input-group input-group-sm">
                                <button 
                                  className="btn btn-outline-secondary"
                                  onClick={() => handleCantidadChange(item.id, item.cantidad - 1)}
                                  disabled={item.cantidad <= 1}
                                >
                                  -
                                </button>
                                <input 
                                  type="number" 
                                  className="form-control text-center"
                                  value={item.cantidad}
                                  onChange={(e) => handleCantidadChange(item.id, parseInt(e.target.value))}
                                  min="1"
                                />
                                <button 
                                  className="btn btn-outline-secondary"
                                  onClick={() => handleCantidadChange(item.id, item.cantidad + 1)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <div className="col-md-2 text-end">
                              <strong>${(item.precio * item.cantidad).toFixed(2)}</strong>
                            </div>
                            <div className="col-md-1 text-end">
                              <button 
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => eliminarProducto(item.id)}
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="border-top pt-3">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5>Total: ${total.toFixed(2)}</h5>
                        <button 
                          className="btn btn-outline-danger btn-sm"
                          onClick={vaciarCarrito}
                        >
                          Vaciar Carrito
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => setMostrarCarrito(false)}
                >
                  Seguir Comprando
                </button>
                {carrito.items.length > 0 && (
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={handleFinalizarCompra}
                  >
                    Finalizar Compra
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Carrito;