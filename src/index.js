import homeComponent from "./home.js";

const myModule = function(doc) {
  doc.querySelector("#content").append(...homeComponent());
}(document);