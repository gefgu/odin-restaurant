import Restaurant from "./restaurant.jpg";

export default function aboutComponent() {
  const heading = document.createElement("h1");
  heading.textContent = "About";

  const image = new Image(600, 400);
  image.src = Restaurant;
  image.alt = "Restaurant Image";

  const paragraph = document.createElement("p");
  paragraph.textContent = `In et lacus vitae mauris placerat pharetra at at arcu. Etiam lacinia magna in dolor porta feugiat. Maecenas ut metus nibh. Morbi bibendum velit nibh, eu venenatis nibh molestie iaculis. Proin vitae risus risus. Duis accumsan sed nisi tempus ullamcorper. Pellentesque non ante eu lorem vehicula fringilla. Sed ut elit sed velit iaculis mollis. Curabitur feugiat risus vel libero dapibus, eu ornare dui finibus. Nullam finibus neque lobortis justo ultrices malesuada vel et nisi. Donec rutrum eget dolor id sagittis. Nulla elit lorem, faucibus vitae viverra non, tristique vitae purus. Aliquam sed metus hendrerit, sagittis nunc non, tincidunt tellus. Ut nisi lorem, sollicitudin nec nisi quis, fermentum porttitor nulla. Etiam blandit pharetra nisl, eu porta orci aliquet elementum. `;

  const container = document.createElement("div");
  container.classList.add("container");
  container.append(heading, image, paragraph);

  return container;
}
