const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
const elements = ingredients.map(value => {
  const itemEl = document.createElement('li');
  itemEl.textContent = value;
  itemEl.classList.add('item');
  return itemEl;
});
ingredientsEl.append(...elements);
