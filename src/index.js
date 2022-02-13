import homeComponent from "./home.js";
import menuComponent from "./menu.js";
import aboutComponent from "./about.js";

const myModule = (function (doc) {
  const content = doc.querySelector("#content");

  const clearContent = () => {
    content.querySelectorAll(".container").forEach(e => e.remove());
  };

  const addButons = () => {
    const homeButton = doc.createElement("button");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", () => {
      clearContent();
      content.appendChild(homeComponent());
    });
    const menuButton = doc.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", () => {
      clearContent();
      content.appendChild(menuComponent());
    });
    const aboutButton = doc.createElement("button");
    aboutButton.textContent = "About";
    aboutButton.addEventListener("click", () => {
      clearContent();
      content.appendChild(aboutComponent());
    });

    const buttons = doc.createElement("div");
    buttons.classList.add("buttons");
    buttons.append(homeButton, menuButton, aboutButton);

    content.appendChild(buttons);
  };

  addButons();
  content.appendChild(homeComponent());
})(document);
