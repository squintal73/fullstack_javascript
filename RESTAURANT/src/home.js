function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const chefImage = document.createElement("img");
  chefImage.src = "images/chef.jpg";
  chefImage.alt = "Chef";

  home.appendChild(createParagraph("Melhor pizza da praia"));
  home.appendChild(createParagraph("desde 1965"));
  home.appendChild(chefImage);
  home.appendChild(createParagraph("peça já"));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
