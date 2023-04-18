const form = document.querySelector('form');
const input = document.querySelector('input[type=text]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  window.location.href = `https://www.google.com/search?q=${input.value} яркие розовые цветы`;
});
