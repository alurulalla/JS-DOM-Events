const colorTextElement = document.getElementById('color-text');
const colorElement = document.querySelector('.color-block');

colorTextElement.addEventListener('keyup', (e) => {
  colorElement.style.backgroundColor = e.target.value;
});
