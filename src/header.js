import Icon from "./Images/logo.png";

// Creates header of the page
const header = () => {
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
};

export default header;
