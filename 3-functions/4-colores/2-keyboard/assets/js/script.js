// Variable global para guardar el color seleccionado
let colorSeleccionado = '';

// Manejador del evento keydown
document.addEventListener('keydown', function (event) {
  const key = event.key.toLowerCase(); // Convertir la tecla a minúsculas

  // Mapeo de teclas a colores
  if (key === 'a') {
    colorSeleccionado = 'pink'; // Rosado
    document.getElementById('key').style.backgroundColor = colorSeleccionado;
  } else if (key === 's') {
    colorSeleccionado = 'orange'; // Naranjo
    document.getElementById('key').style.backgroundColor = colorSeleccionado;
  } else if (key === 'd') {
    colorSeleccionado = 'skyblue'; // Celeste
    document.getElementById('key').style.backgroundColor = colorSeleccionado;
  }
  // Crear nuevos divs con colores específicos
  else if (key === 'q') {
    crearDiv('purple'); // Morado
  } else if (key === 'w') {
    crearDiv('gray'); // Gris
  } else if (key === 'e') {
    crearDiv('brown'); // Café
  }
});

// Función para crear un nuevo div con el color especificado
function crearDiv(color) {
  const newDiv = document.createElement('div');
  newDiv.style.width = '200px';
  newDiv.style.height = '200px';
  newDiv.style.backgroundColor = color;
  newDiv.style.border = '1px solid black';
  // Agregar el div al final del cuerpo del documento
  document.body.appendChild(newDiv);
}
