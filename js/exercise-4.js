const inputElement = document.getElementById('counter-text');
const resElement = document.getElementById('counter-res-text');

inputElement.addEventListener('keyup', (e) => {
  const count = e.target.value.length;
  resElement.innerText = `The above text has ${count} characters`;
});
