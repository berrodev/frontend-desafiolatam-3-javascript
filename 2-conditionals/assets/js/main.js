console.log('main.js loaded');
// 1 - Toggle Class
// Get the picture element by id
const oliPicture = document.getElementById('oli-picture');

// Add a click event listener to the picture element that toggles the class 'bordered'
oliPicture.addEventListener('click', function () {
  oliPicture.classList.toggle('bordered');
});

// 2 - Stickers
// Get all stickers input element by id
const stickers = document.querySelectorAll('#stickers-section input');

// Get the check button element by id
const checkButton = document.getElementById('check-button');

// Get the paragraph check message element by id
const checkMessage = document.getElementById('sticker-status-paragraph');

// Get the sum of the stickers input values
function getSum() {
  let sum = 0;
  stickers.forEach(function (sticker) {
    sum += parseInt(sticker.value);
  });
  return sum;
}

// Add a click event listener to the check button element that checks if the sum of the stickers input values is equal or less than 10
checkButton.addEventListener('click', function () {
  const sum = getSum();
  if (sum <= 10) {
    checkMessage.textContent = `You have ${sum} stickers.`;
  } else {
    checkMessage.textContent = 'You have too many stickers!';
  }
});
