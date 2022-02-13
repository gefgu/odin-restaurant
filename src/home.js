import Restaurant from "./restaurant.jpg";

export default function homeComponent() {
  const heading = document.createElement("h1");
  heading.textContent = "Awesome Restaurant!";

  const image = new Image(600, 400);
  image.src = Restaurant;
  image.alt = "Restaurant Image";

  const paragraph = document.createElement("p");
  paragraph.textContent = `Vivamus elementum libero eu dui accumsan, sed dapibus lorem venenatis.
  Nunc sagittis sem quis facilisis semper. Integer turpis nunc,
  sollicitudin sit amet enim eget, viverra tempus neque. Nullam sed mattis
  turpis, eget blandit diam. Nulla blandit aliquet erat, in suscipit lorem
  tincidunt at. Nunc ac posuere ligula, in vulputate tellus. Etiam quis
  rutrum tellus.`;

  const container = document.createElement("div");
  container.classList.add("container");
  container.append(heading, image, paragraph);

  return container;

}
