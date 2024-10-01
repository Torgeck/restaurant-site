import content from "./index.js";
import removeChilds from "./index.js";

// Create elements for about page
export function aboutClick() {
  // Checks if is already on about tab
  if (!content.classList.contains("about")) {
    const location = document.createElement("div");
    const program = document.createElement("div");
    const className = content.classList.item();
    content.classList.replace(className, "about");

    // Add classes to generated elements
    location.classList.add("location", "card");
    program.classList.add("program", "card");

    // Removes all childs nodes from content div
    removeChilds();
  }
}
