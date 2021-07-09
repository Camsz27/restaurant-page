import "./style.css";
import Icon from "./logo.png";

// Creates header
const headerContainer = document.querySelector("#content");
const logo = document.createElement("img");
headerContainer.classList.add("sticky");
logo.setAttribute("src", Icon);
logo.setAttribute("alt", "salvaje-logo");
logo.classList.add("mainLogo");
headerContainer.append(logo);
const headerList = document.createElement("ul");
const restauranteHeader = document.createElement("li");
restauranteHeader.classList.add("header");
restauranteHeader.textContent = "El Restaurante";
const menuHeader = document.createElement("li");
menuHeader.classList.add("header");
menuHeader.textContent = "Menú";
const contactoHeader = document.createElement("li");
contactoHeader.classList.add("header");
contactoHeader.textContent = "Contacto";
headerList.append(restauranteHeader, menuHeader, contactoHeader);
headerContainer.append(headerList);

// Creates content of the landing page
const contentDivision = document.createElement("div");
contentDivision.setAttribute("id", "info");
const contentList1 = document.createElement("ul");
contentList1.classList.add("description");
const list11 = document.createElement("li");
list11.classList.add("description", "text", "right");
const headerContent1 = document.createElement("h1");
headerContent1.classList.add("description");
headerContent1.textContent = "EL LADO SALVAJE DE LA GASTRONOMÍA JAPONESA";
const paragraph1 = document.createElement("p");
paragraph1.textContent =
  "Donde la tradición y el misticismo de la cocina japonesa se deja pintar de sabores y técnicas de todos los rincones del mundo, justo donde los sentidos se deleitan y surge nuestro lado más salvaje, esa parte de nosotros que no se deja dominar, no ante tal experiencia gastronómica.";
list11.append(headerContent1, paragraph1);
const list12 = document.createElement("li");
list12.classList.add("description");
contentList1.append(list11, list12);

const contentList2 = document.createElement("ul");
contentList2.classList.add("description");
const list22 = document.createElement("li");
list22.classList.add("description", "text");
const headerContent2 = document.createElement("h1");
headerContent2.classList.add("description");
headerContent2.textContent = "UN FENÓMENO MUNDIAL";
const paragraph2 = document.createElement("p");
paragraph2.textContent =
  "SALVAJE es donde encontrarás una fusión de gastronomía japonesa mediterránea mientras disfrutas de un diseño arquitectónico igual de exquisito y un ambiente relajado que va elevándote conforme se acerca la noche.";
const paragraph3 = document.createElement("p");
paragraph3.textContent =
  "El fenómeno iniciado en la ciudad de Panamá, ha llevado a artistas y famosos de Hollywood y de otros rincones del mundo, hasta nuestras puertas, convirtiéndose en un sitió obligado a visitar.";
list22.append(headerContent2, paragraph2, paragraph3);
const list21 = document.createElement("li");
list21.classList.add("description");
contentList2.append(list21, list22);

contentDivision.append(contentList1, contentList2);
const body = document.querySelector("body");
body.append(contentDivision);
