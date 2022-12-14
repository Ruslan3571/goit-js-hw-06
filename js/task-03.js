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

const galleryListEl = document.querySelector(`.gallery`);

const imagesMarkup = images
  .map(
    ({ url, alt }) =>
      `<li class='list-item new'><img src =${url} alt =${alt} width = '200' height = '150'/></li>`
  )
  .join("");
galleryListEl.style.listStyle = `none`;
galleryListEl.style.display = "flex";
galleryListEl.style.gap = "30px";

galleryListEl.insertAdjacentHTML("afterbegin", imagesMarkup);

// const galleryListEl = document.querySelector(`.gallery`);
// console.log(galleryListEl);

// // Створення картки
// const makeGalleryCard = ({ width = 200, height = 150, url, alt }) => {
//   const listItemEl = document.createElement(`li`);
//   listItemEl.classList.add(`gallery-Item`);

//   // Створення a

//   const listLinkEl = document.createElement(`a`);
//   listLinkEl.href = `#`;
//   listItemEl.append(listLinkEl);

//   // Створення img

//   const listImgEl = document.createElement(`img`);
//   listImgEl.src = url;
//   listImgEl.alt = alt;
//   listImgEl.width = width;
//   listImgEl.height = height;

//   listLinkEl.append(listImgEl);

//   return listItemEl;
// };

// // Перебір колекції карточок через map

// const galleryCardsArr = images.map(makeGalleryCard);

// // Вставка колекції карточок  на сторінку
// galleryListEl.append(...galleryCardsArr);

// galleryListEl.style.display = `flex`;
// galleryListEl.style.gap = "30px";
// galleryListEl.style.listStyle = `none`;
