import removeChilds, { content } from "./index.js";

export function menuClick() {
  // Do menu things, creates elements and append them to content
}

function createItem(titleText, descText) {
  const container = document.createElement("div");
  const title = document.createElement("h2");
  const description = document.createElement("p");

  // Change later maybe
  container.classList.add("card");
  title.classList.add("title");
  description.classList.add("descrition");

  title.textContent = titleText;
  description.textContent = descText;

  container.append(title, description);

  return container;
}
