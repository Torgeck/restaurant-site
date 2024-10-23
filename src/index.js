import "./styles.css";
import borgirImg from "./borgir.jpg";
import { aboutClick } from "./about";
import { initPageLoad, homeClick } from "./home";

// Nav buttons
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

// Elements that contains other elements
export const content = document.getElementById("content");
initPageLoad();

// function that deletes all child nodes from content div
export default function removeChilds() {
  while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
  }
}

// Sets events listeners of buttons
aboutBtn.addEventListener("click", aboutClick);
homeBtn.addEventListener("click", homeClick);
