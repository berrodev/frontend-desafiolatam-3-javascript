console.log('main.js loaded');

// Get the picture element by id
const oliPicture = document.getElementById('oli-picture');

// Add a click event listener to the picture element that toggles the class 'bordered'
oliPicture.addEventListener('click', function () {
  oliPicture.classList.toggle('bordered');
});
