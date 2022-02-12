import homeComponent from "./home.js";
import menuComponent from "./menu.js";
import aboutComponent from "./about.js";

const myModule = (function (doc) {
  const content = doc.querySelector("#content");

  const clearContent = () => {
    content.textContent = "";
  };

  const addButons = () => {
    const homeButton = doc.createElement("button");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", () => {
      clearContent();
      addButons();
      content.append(...homeComponent());
    });
    const menuButton = doc.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", () => {
      clearContent();
      addButons();
      content.append(...menuComponent());
    });
    const aboutButton = doc.createElement("button");
    aboutButton.textContent = "About";
    aboutButton.addEventListener("click", () => {
      clearContent();
      addButons();
      content.append(...aboutComponent());
    });

    content.append(homeButton, menuButton, aboutButton);
  };

  addButons();
  content.append(...homeComponent());
})(document);
