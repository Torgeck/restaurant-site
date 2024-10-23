import borgirImg from "./borgir.jpg";
import removeChilds, { content } from "./index.js";

export function homeClick() {
  if (!content.classList.contains("home")) {
    let className = content.className;
    content.classList.replace(className, "home");
    // Removes elements of content
    removeChilds();
    createHomeElements();
  }
}

export function initPageLoad() {
  content.classList.add("home");
  createHomeElements();
}

function createHomeElements() {
  const restInfo = document.createElement("div");
  const imgContainer = document.createElement("div");
  const deals = document.createElement("div");
  const image = document.createElement("img");
  const restName = document.createElement("h2");
  const restDesc = document.createElement("p");
  const dealsTitle = document.createElement("h2");
  const dealsDesc = document.createElement("p");

  // Adding classes to all generated elements
  restInfo.classList.add("info", "card");
  imgContainer.classList.add("img-container", "card");
  deals.classList.add("deals", "card");
  restName.classList.add("name");
  restDesc.classList.add("description");
  dealsTitle.classList.add("title", "deals");
  dealsDesc.classList.add("description", "deals");

  // Setting up elements
  image.src = borgirImg;
  restName.textContent = "Borgir";
  restDesc.textContent =
    "An established fast-food chain, where only the best Borgir's are made";
  dealsTitle.textContent = "BOGO on cheesy Borgir's";
  dealsDesc.textContent =
    "Buy one get one free on Borgir's with cheese on them";

  // Appending childs to the corresponding father
  content.append(restInfo, imgContainer, deals);
  restInfo.append(restName, restDesc);
  imgContainer.appendChild(image);
  deals.append(dealsTitle, dealsDesc);
}
