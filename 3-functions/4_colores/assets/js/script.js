const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');

const changeBGToBlack = (event) => {
  event.target.style.backgroundColor = 'black';
};

//add event listener

div1.addEventListener('click', changeBGToBlack);

div2.addEventListener('click', changeBGToBlack);

div3.addEventListener('click', changeBGToBlack);

div4.addEventListener('click', changeBGToBlack);
