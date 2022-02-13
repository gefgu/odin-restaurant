import Restaurant from "./restaurant.jpg";

export default function menuComponent() {
  const heading = document.createElement("h1");
  heading.textContent = "Menu";

  const image = new Image(600, 400);
  image.src = Restaurant;
  image.alt = "Restaurant Image";

  const paragraph = document.createElement("p");
  paragraph.textContent = `Morbi pellentesque tortor sed elit ullamcorper lacinia. Aenean placerat at nisl sit amet sodales. Nulla blandit congue est porttitor vulputate. In porta accumsan arcu, a porta sem tincidunt in. Mauris condimentum orci et congue dignissim. Nullam sit amet urna quis nisl finibus commodo. Nunc vitae faucibus ipsum. Ut cursus purus at eros mollis, in consectetur lectus ultrices. In ac diam at nisi sodales dignissim non semper sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam porta leo sit amet nisi pretium, sed eleifend est sagittis. Aenean eget ultricies diam, in ultrices ante. Ut nec bibendum mauris. Etiam velit nisl, gravida a diam et, ultricies commodo erat. Quisque in risus luctus, rutrum velit non, auctor metus. Cras in ultricies tortor. .`;

  const container = document.createElement("div");
  container.classList.add("container");
  container.append(heading, image, paragraph);

  return container;
}
