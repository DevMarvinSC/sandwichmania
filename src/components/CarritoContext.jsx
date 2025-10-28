import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CarritoContext = createContext();

// Función para cargar el carrito desde localStorage
const cargarCarritoDesdeStorage = () => {
  try {
    const carritoGuardado = localStorage.getItem('sandwichmania-carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : { items: [] };
  } catch (error) {
    console.error('Error cargando carrito desde localStorage:', error);
    return { items: [] };
  }
};

// Función para guardar el carrito en localStorage
const guardarCarritoEnStorage = (carrito) => {
  try {
    localStorage.setItem('sandwichmania-carrito', JSON.stringify(carrito));
  } catch (error) {
    console.error('Error guardando carrito en localStorage:', error);
  }
};

const carritoReducer = (state, action) => {
  let nuevoEstado;

  switch (action.type) {
    case 'AGREGAR_PRODUCTO':
      const productoExistente = state.items.find(item => item.id === action.payload.id);
      if (productoExistente) {
        nuevoEstado = {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          )
        };
      } else {
        nuevoEstado = {
          ...state,
          items: [...state.items, { ...action.payload, cantidad: 1 }]
        };
      }
      break;
    
    case 'ELIMINAR_PRODUCTO':
      nuevoEstado = {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
      break;
    
    case 'ACTUALIZAR_CANTIDAD':
      nuevoEstado = {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, cantidad: action.payload.cantidad }
            : item
        )
      };
      break;
    
    case 'VACIAR_CARRITO':
      nuevoEstado = {
        ...state,
        items: []
      };
      break;

    case 'CARGAR_CARRITO':
      nuevoEstado = {
        ...state,
        items: action.payload
      };
      break;
    
    default:
      return state;
  }

  // Guardar en localStorage después de cada cambio
  guardarCarritoEnStorage(nuevoEstado);
  return nuevoEstado;
};

export const CarritoProvider = ({ children }) => {
  const [carrito, dispatch] = useReducer(carritoReducer, { items: [] });

  // Cargar el carrito desde localStorage cuando el componente se monta
  useEffect(() => {
    const carritoGuardado = cargarCarritoDesdeStorage();
    dispatch({ type: 'CARGAR_CARRITO', payload: carritoGuardado.items });
  }, []);

  const agregarProducto = (producto) => {
    dispatch({ type: 'AGREGAR_PRODUCTO', payload: producto });
  };

  const eliminarProducto = (id) => {
    dispatch({ type: 'ELIMINAR_PRODUCTO', payload: id });
  };

  const actualizarCantidad = (id, cantidad) => {
    dispatch({ type: 'ACTUALIZAR_CANTIDAD', payload: { id, cantidad } });
  };

  const vaciarCarrito = () => {
    dispatch({ type: 'VACIAR_CARRITO' });
  };

  const total = carrito.items.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  const totalItems = carrito.items.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <CarritoContext.Provider value={{
      carrito,
      agregarProducto,
      eliminarProducto,
      actualizarCantidad,
      vaciarCarrito,
      total,
      totalItems
    }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe ser usado dentro de CarritoProvider');
  }
  return context;
};