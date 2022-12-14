// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі < li > за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// 1.Доступ до 'ul'
const listEl = document.getElementById(`ingredients`);

ingredients.forEach((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.innerText = ingredient;
  itemEl.classList.add("item");
  listEl.append(itemEl);
});
console.log(listEl);
