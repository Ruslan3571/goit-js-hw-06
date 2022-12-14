// document.getElementById("validation-input").onblur = function () {
//   console.log(this.value.length);
//   if (this.getAttribute("data-length") > this.value.length) {
//     this.classList.remove("valid");
//     this.classList.add("invalid");
//   } else {
//     this.classList.remove("invalid");
//     this.classList.add("valid");
//   }
// };

// варіант 2
const inputEl = document.getElementById("validation-input");
const amountOfEl = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", function () {
  if (inputEl.value.length != amountOfEl) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
});

// варіант 3

// const input = document.querySelector("#validation-input");
// const max = document.querySelector('input[data-length="6"]');

// input.addEventListener("blur", () => {
//   if (input.value.length !== Number(max.dataset.length)) {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//   } else {
//     input.classList.remove("invalid");
//     input.classList.add("valid");
//   }
// });
