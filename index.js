const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const button = document.getElementById('zuczy');
const resultOutput = document.getElementById('res');

button.addEventListener('click', () => {
  const minValue = parseInt(minInput.value);
  const maxValue = parseInt(maxInput.value);
  if (Number.isNaN(minValue) || Number.isNaN(maxValue)) {
    resultOutput.textContent = 'Niepoprawne dane';
    return;
  }
  const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  resultOutput.textContent = `Wylosowana kolonia: ${randomNumber}`;
});

