const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const galleryListEl = document.querySelector(`.gallery`);
console.log(galleryListEl);

// Створення картки
const makeGalleryCard = ({ width = 200, height = 200, url, alt }) => {
  const listItemEl = document.createElement(`li`);
  listItemEl.classList.add(`gallery-Item`);

  // Створення a

  const listLinkEl = document.createElement(`a`);
  listLinkEl.href = `#`;
  listItemEl.append(listLinkEl);

  // Створення img

  const listImgEl = document.createElement(`img`);
  listImgEl.src = url;
  listImgEl.alt = alt;
  listImgEl.width = width;
  listImgEl.height = height;

  listLinkEl.append(listImgEl);

  return listItemEl;
};

// Перебір колекції карточок через map

const galleryCardsArr = images.map(makeGalleryCard);

// Вставка колекції карточок  на сторінку
galleryListEl.append(...galleryCardsArr);

galleryListEl.style.display = `flex`;
galleryListEl.style.listStyle = `none`;
