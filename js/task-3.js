let textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  const inputValue = event.target.value.trim();
  event.preventDefault();

  return inputValue === ''
    ? (textOutput.textContent = 'Anonymous')
    : (textOutput.textContent = inputValue);
});
