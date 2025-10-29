import React, { useState } from 'react';
import { useEffect } from 'react';
import { useCarrito } from '../components/CarritoContext';
import { useNavigate } from 'react-router-dom';
import headermenu from './headermenu';
import footergeneral from './footergeneral';

const Checkout = () => {
  useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }, []);

  const { carrito, total, vaciarCarrito } = useCarrito();
  const navigate = useNavigate();
  
  const [cliente, setCliente] = useState({
    nombre: '',
    telefono: '',
    modoEntrega: '',
    direccionDomicilio: '',
    instrucciones: ''
  });

  const [enviando, setEnviando] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCliente(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generarMensajeWhatsApp = () => {
    // Encabezado del mensaje
    let mensaje = `¡Hola! Quiero hacer un pedido de SandwichManía\n\n`;
    mensaje += `*Información del Cliente:*\n`;
    mensaje += `Nombre: ${cliente.nombre}\n`;
    mensaje += `Teléfono: ${cliente.telefono}\n`;
    mensaje += `Modo de Entrega: ${cliente.modoEntrega}\n`;
    
    // Solo mostrar dirección si es a domicilio
    if (cliente.modoEntrega === 'A domicilio' && cliente.direccionDomicilio) {
      mensaje += `Dirección: ${cliente.direccionDomicilio}\n`;
    }
    
    if (cliente.instrucciones) {
      mensaje += `Instrucciones: ${cliente.instrucciones}\n`;
    }
    
    mensaje += `\n*Mi Pedido:*\n`;
    
    // Productos del carrito
    carrito.items.forEach(item => {
      mensaje += ` ${item.nombre} x${item.cantidad}\n`;
      mensaje += `   Precio: $${item.precio.toFixed(2)} c/u\n`;
      mensaje += `   Subtotal: $${(item.precio * item.cantidad).toFixed(2)}\n\n`;
    });
    
    mensaje += `*Total del Pedido: $${total.toFixed(2)}* \n\n`;
    mensaje += `¡Gracias! Espero mi confirmación.\n\n`;
    mensaje += 'https://sandwichmania.netlify.app/';

    return encodeURIComponent(mensaje);
  };

  const handleEnviarPedido = () => {
    if (!cliente.nombre || !cliente.telefono || !cliente.modoEntrega) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    // Validar dirección si seleccionó "A domicilio"
    if (cliente.modoEntrega === 'A domicilio' && !cliente.direccionDomicilio) {
      alert('Por favor ingresa la dirección de entrega');
      return;
    }

    setEnviando(true);
    
    const mensaje = generarMensajeWhatsApp();
    const numeroWhatsApp = '529371445137';
    
    // Crear enlace de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    
    // Abrir WhatsApp en nueva pestaña
    window.open(urlWhatsApp, '_blank');
    
    // Vaciar carrito y redirigir después de un momento
    setTimeout(() => {
      vaciarCarrito();
      setEnviando(false);
      alert('¡Pedido enviado! Serás contactado pronto para confirmar.');
      navigate('/');
    }, 2000);
  };

  const handleCancelar = () => {
    navigate(-1);
  };

  if (carrito.items.length === 0) {
    return (
      <div className="container py-5">
        {headermenu()}
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <i className="fas fa-shopping-cart fa-3x text-muted mb-3 p-5"></i>
            <h3>Tu carrito está vacío</h3>
            <p>Agrega algunos productos antes de proceder al checkout</p>
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/Sandwiches')}
            >
              Ir a Comprar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='p-5'>
      {headermenu()}
      <div className='container py-5'>
      <div className="row">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Información de Entrega</h4>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="nombre" className="form-label">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    value={cliente.nombre}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="col-md-6">
                  <label htmlFor="telefono" className="form-label">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telefono"
                    name="telefono"
                    value={cliente.telefono}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                {/* Modo de Entrega */}
                <div className="col-12">
                  <label htmlFor="modoEntrega" className="form-label">
                    Modo de Entrega *
                  </label>
                  <select 
                    id="modoEntrega" 
                    className='form-control' 
                    name="modoEntrega"
                    value={cliente.modoEntrega}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecciona el modo de entrega</option>
                    <option value="Local SándwichMania (Av Universidad, Cunduacán, Tabasco)">
                      Recoger en Local (Av Universidad, Cunduacán, Tabasco)
                    </option>
                    <option value="A domicilio">Entrega a Domicilio</option>
                  </select>
                </div>

                {/* Campo de dirección condicional */}
                {cliente.modoEntrega === 'A domicilio' && (
                  <div className="col-12">
                    <label htmlFor="direccionDomicilio" className="form-label">
                      Dirección de Entrega *
                    </label>
                    <textarea
                      className="form-control"
                      id="direccionDomicilio"
                      name="direccionDomicilio"
                      rows="3"
                      value={cliente.direccionDomicilio}
                      onChange={handleInputChange}
                      required
                      placeholder="Por favor ingresa tu dirección completa: Calle, número, colonia, ciudad, referencias..."
                    ></textarea>
                    <div className="form-text">
                      Asegúrate de incluir todas las referencias necesarias para la entrega.
                    </div>
                  </div>
                )}
                
                <div className="col-12">
                  <label htmlFor="instrucciones" className="form-label">
                    Instrucciones Especiales (Opcional)
                  </label>
                  <textarea
                    className="form-control"
                    id="instrucciones"
                    name="instrucciones"
                    rows="3"
                    value={cliente.instrucciones}
                    onChange={handleInputChange}
                    placeholder="Ej: Llamar antes de llegar, dejar en recepción, no tocar timbre, etc."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-header bg-light">
              <h5 className="mb-0">Resumen del Pedido</h5>
            </div>
            <div className="card-body">
              {carrito.items.map(item => (
                <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <h6 className="mb-0">{item.nombre}</h6>
                    <small className="text-muted">x{item.cantidad}</small>
                  </div>
                  <span className="fw-bold">
                    ${(item.precio * item.cantidad).toFixed(2)}
                  </span>
                </div>
              ))}
              
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Total:</h5>
                <h4 className="mb-0 text-primary">${total.toFixed(2)}</h4>
              </div>

              {/* Información del modo de entrega en el resumen */}
              <div className="mt-3 p-3 bg-light rounded">
                <h6 className="mb-2">Entrega:</h6>
                <p className="mb-1 small">
                  {cliente.modoEntrega === 'A domicilio' 
                    ? '🚚 Entrega a domicilio' 
                    : cliente.modoEntrega 
                    ? '🏪 Recoger en local'
                    : 'Selecciona modo de entrega'
                  }
                </p>
                {cliente.modoEntrega === 'A domicilio' && cliente.direccionDomicilio && (
                  <p className="mb-0 small text-muted">
                    📍 {cliente.direccionDomicilio}
                  </p>
                )}
              </div>
            </div>
          </div>
          
          <div className="card shadow-sm mt-3">
            <div className="card-body">
              <h6 className="mb-3">Método de Confirmación</h6>
              <div className="alert alert-info">
                <i className="fab fa-whatsapp me-2"></i>
                <strong>Confirmación por WhatsApp</strong>
                <p className="mb-0 small mt-1">
                  Tu pedido se enviará por WhatsApp para confirmación. 
                  Te contactaremos pronto.
                </p>
              </div>
              
              <div className="d-grid gap-2">
                <button
                  className="btn btn-success btn-lg"
                  onClick={handleEnviarPedido}
                  disabled={enviando}
                >
                  {enviando ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <i className="fab fa-whatsapp me-2"></i>
                      Enviar Pedido por WhatsApp
                    </>
                  )}
                </button>
                
                <button
                  className="btn btn-outline-secondary"
                  onClick={handleCancelar}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      </div>
      {footergeneral()}
    </div>
  );
};

export default Checkout;