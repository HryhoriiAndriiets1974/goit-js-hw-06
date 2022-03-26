const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngridients = document.querySelector("#ingredients");
const listItems = ingredients.map ((element) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = element;
  return li;
});
// for (const element of ingredients) {
//   const li = document.createElement("li");
//   li.classList.add("item");
//   li.textContent = element;
//   listItems.push(li);
// }
listIngridients.append(...listItems);
console.log(listIngridients);
