const arrItemsEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${arrItemsEl.length}`);
// console.log(arrItemsEl[0].children[0].textContent);
arrItemsEl.forEach(item => {
  const h2 = item.firstElementChild;
  const ul = h2.nextElementSibling;

  console.log(`Category: ${h2.textContent}`);
  console.log(`Elements: ${ul.children.length}`);
});
