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
    // Check if the sticker value is empty, not a number or less than 0
    if (
      sticker.value === '' ||
      isNaN(sticker.value) ||
      parseInt(sticker.value) < 0
    ) {
      sticker.value = 0;
    }
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

// 3 - Password

// Get the password input element by id
const password = document.querySelectorAll('#password-section select');

// Get the values of the password input elements
function getPassword() {
  let passwordString = '';
  password.forEach(function (input) {
    passwordString += input.value;
  });
  return passwordString;
}

// Get the password message element by id
const passwordMessage = document.getElementById('password-check-paragraph');

// Get the check password button element by id
const checkPasswordButton = document.getElementById('password-button');

// Add a click event listener to the check password button element that checks if the password is equal to '714'
checkPasswordButton.addEventListener('click', function () {
  const passwordString = getPassword();
  if (passwordString === '911') {
    passwordMessage.textContent = 'Correct password 1!';
  } else if (passwordString === '714') {
    passwordMessage.textContent = 'Correct password 2!';
  } else {
    passwordMessage.textContent = 'Incorrect password!';
  }
});
