let inputElement = document.getElementById('input-text');

const incrementButton = document.getElementById('btn-increment');
const decrementButton = document.getElementById('btn-decrement');

incrementButton.addEventListener('click', () => {
  inputElement.value = +document.getElementById('input-text').value + 1;
});

decrementButton.addEventListener('click', (e) => {
  inputElement.value = +document.getElementById('input-text').value - 1;
});
