// Get the div elements
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');

// Create a function that changes the background color of the div to black
const changeBGToBlack = (event) => {
  event.target.style.backgroundColor = 'black';
};

// Add event listeners to the divs

div1.addEventListener('click', changeBGToBlack);

div2.addEventListener('click', changeBGToBlack);

div3.addEventListener('click', changeBGToBlack);

div4.addEventListener('click', changeBGToBlack);
