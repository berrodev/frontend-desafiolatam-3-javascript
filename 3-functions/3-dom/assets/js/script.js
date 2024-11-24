// 3 - Pintar
function pintar(ele, color = 'green') {
  ele.style.backgroundColor = color;
}
// obtener el elemento
const ele = document.getElementById('ele1');
// añadir el evento al elemento
ele.addEventListener('click', () => pintar(ele, 'yellow'));
