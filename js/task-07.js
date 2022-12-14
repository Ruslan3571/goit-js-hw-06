const inputRangeEl = document.querySelector("#font-size-control");
const inputTextEl = document.querySelector("#text");

const handleInput = () => {
  inputTextEl.style.fontSize = `${inputRangeEl.value}px`;
};

inputRangeEl.addEventListener("input", handleInput);
