const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector(".gallery");
const murkup = images
  .map(
    (i) =>
      `<li class="img-list"><img class="size" src="${i.url}" alt = "${i.alt}"></li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", murkup);
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.justifyContent = "center";
gallery.style.listStyle = "none";
const imageList = document.querySelectorAll(".img-list");
for (const listElement of imageList) {
  listElement.style.margin = "15px";
}

const img = document.querySelectorAll(".size");

for (const element of img) {
  element.style.height = "300px";
  element.style.borderRadius = "15px";
}
