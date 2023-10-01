const categories = document.querySelectorAll("#categories .item");
const numberOfCategories = categories.length;
console.log("Elements:", numberOfCategories);

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const itemsInCategory = category.querySelectorAll("li");
  const numberOfItems = itemsInCategory.length;
  console.log("Elements:", numberOfItems);
});
