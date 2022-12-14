let counterValue = 0;

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const value = document.getElementById("value");

const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
