import removeChilds, { content } from "./index.js";
const menuMap = new Map([
  [
    "The Classic Borgir",
    "The one and only! This signature hamburger comes with a juicy beef patty, melted cheese, crispy lettuce, and our secret Borgir sauce—demolish-worthy in every bite.",
  ],
  [
    "Borgir Fries",
    "Not just any fries! These golden, crispy delights come seasoned to perfection, with an optional side of our house-made dipping sauce that’ll make you say “borgir” with every bite.",
  ],
  [
    "Cheesy Borgir Deluxe",
    "Kick it up a notch with extra layers of gooey cheese and caramelized onions, topped with a double beef patty. This one isn’t just for the hungry, it’s for the hungry-hungry.",
  ],
  [
    "Borgir Shake",
    "No fast-food meal is complete without a shake! Our thick, creamy shakes come in three flavors: Chocolate, Vanilla, and Strawberry—perfect for sipping between bites of your Borgir.",
  ],
]);
export function menuClick() {
  // Do menu things, creates elements and append them to content
  if (!content.classList.contains("menu")) {
    let className = content.className;
    content.classList.replace(className, "menu");
    // Removes elements of content
    removeChilds();
    menuMap.forEach(createItem);
  }
}

function createItem(descText, titleText) {
  const container = document.createElement("div");
  const title = document.createElement("h2");
  const description = document.createElement("p");

  // Change later maybe
  container.classList.add("card");
  title.classList.add("title");
  description.classList.add("description");

  title.textContent = titleText;
  description.textContent = descText;

  container.append(title, description);
  content.append(container);
}
