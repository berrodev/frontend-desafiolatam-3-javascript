// 3 - Pintar
function pintar(ele, color = 'green') {
  ele.style.backgroundColor = color;
}
// Obtener el elemento
const ele = document.getElementById('ele1');
// Añadir el evento al elemento
ele.addEventListener('click', () => pintar(ele, 'yellow'));
