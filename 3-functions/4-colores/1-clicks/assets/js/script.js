// Obtener todos los elementos
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');

// Función para cambiar el color de fondo a negro
const changeBGToBlack = (event) => {
  event.target.style.backgroundColor = 'black';
};

// Agregar event listeners

div1.addEventListener('click', changeBGToBlack);

div2.addEventListener('click', changeBGToBlack);

div3.addEventListener('click', changeBGToBlack);

div4.addEventListener('click', changeBGToBlack);
