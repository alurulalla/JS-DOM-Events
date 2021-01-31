const inputText = document.getElementById('enc-dec-text');
const encodeButton = document.getElementById('btn-encode');
const decodeButton = document.getElementById('btn-decode');
const resultElement = document.getElementById('enc-dec-text-result');

encodeButton.addEventListener('click', () => {
  const value = inputText.value;
  const encodedValue = urlEncode(value);
  resultElement.value = encodedValue;
});

decodeButton.addEventListener('click', () => {
  const value = inputText.value;
  const decodedValue = urlDecode(value);
  resultElement.value = decodedValue;
});

const urlEncode = (value) => {
  return encodeURIComponent(value);
};

const urlDecode = (value) => {
  return decodeURIComponent(value);
};
