const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector("#ingredients");

const ingredientsArray = ingredients.map(ingredient => {
  const liItem = document.createElement("li")
  liItem.textContent = ingredient;
  liItem.classList.add("item")
  return liItem;
})

ulEl.append(...ingredientsArray)

