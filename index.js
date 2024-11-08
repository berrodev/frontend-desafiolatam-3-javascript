// Valores iniciales
const precio = 400000;
let cantidad = 0;

// Elementos del DOM
const precioSpan = document.querySelector('.precio-inicial');
const totalSpan = document.querySelector('.valor-total');
const quantitySpan = document.querySelector('.cantidad');

// Asignar valores iniciales
precioSpan.innerHTML = precio;
totalSpan.innerHTML = 0;
quantitySpan.innerHTML = cantidad;

// Función para manejar los clicks
const handleClick = (operation) => {
  if (operation === 'substract' && cantidad > 0) {
    cantidad -= 1;
  } else if (operation === 'add') {
    cantidad += 1;
  }

  // Actualizar valores en el DOM
  quantitySpan.innerHTML = cantidad;
  totalSpan.innerHTML = cantidad * precio;
};
