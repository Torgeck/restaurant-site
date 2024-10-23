import removeChilds, { content } from "./index.js";
// Create elements for about page
export function aboutClick() {
  // Checks if is already on about tab
  if (!content.classList.contains("about")) {
    const location = document.createElement("div");
    const program = document.createElement("div");
    const address = document.createElement("p");
    let className = content.className;
    let header = document.createElement("h2");
    let description = document.createElement("p");
    content.classList.replace(className, "about");

    // Removes all childs nodes from content div
    removeChilds();

    // Add classes to generated elements
    location.classList.add("location", "card");
    program.classList.add("program", "card");
    header.classList.add("title");
    description.classList.add("description");
    header.textContent = "How to get here";
    description.textContent =
      "We're conveniently located in the bustling city of Snackton, in the heart of Nomlandia. Whether you're cruising by for a quick pick-up or looking to sit and savor, you can find us right in the action. You can’t miss the giant burger logo above the doors—it's calling you!";
    address.innerHTML =
      "Address: 123 Borgir St.,Snackton, Nomlandia <br/> Hours: <br/> Monday - Friday: 11:00 AM - 10:00 PM <br/> Saturday & Sunday: 12:00 PM - 11:00 PM";
    location.append(header, description, address);

    header = document.createElement("h2");
    description = document.createElement("p");
    header.classList.add("title");
    description.classList.add("description");
    header.textContent = "Reward program";
    description.textContent =
      "Love our food? Why not join our Borgir Demolition Squad loyalty program and earn rewards with every order? Get free fries on your first visit!";

    program.append(header, description);

    content.append(location, program);
  }
}
