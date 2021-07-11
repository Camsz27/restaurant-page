import Icon from "./Images/logo.png";
import restaurant from "./restaurant";
import menu from "./menu";
import contact from "./contact";

// Creates header of the page
const header = () => {
  const div = document.createElement("div");
  const headerContainer = document.querySelector("#content");
  const logo = document.createElement("img");
  div.setAttribute("id", "sticky");
  logo.setAttribute("src", Icon);
  logo.setAttribute("alt", "salvaje-logo");
  logo.classList.add("mainLogo");
  div.append(logo);
  const headerList = document.createElement("ul");
  const restauranteHeader = document.createElement("li");
  restauranteHeader.classList.add("header", "active");
  restauranteHeader.textContent = "El Restaurante";
  const menuHeader = document.createElement("li");
  menuHeader.classList.add("header");
  menuHeader.textContent = "Menú";
  const contactoHeader = document.createElement("li");
  contactoHeader.classList.add("header");
  contactoHeader.textContent = "Contacto";
  headerList.append(restauranteHeader, menuHeader, contactoHeader);
  restauranteHeader.addEventListener("click", removeContent);
  restauranteHeader.addEventListener("click", restaurant);
  menuHeader.addEventListener("click", removeContent);
  menuHeader.addEventListener("click", menu);
  contactoHeader.addEventListener("click", removeContent);
  contactoHeader.addEventListener("click", contact);
  div.append(headerList);
  headerContainer.append(div);
  function removeContent() {
    let divLength = headerContainer.childNodes.length;
    restauranteHeader.classList.remove("active");
    menuHeader.classList.remove("active");
    contactoHeader.classList.remove("active");
    this.classList.add("active");
    for (let i = 3; i <= divLength; i++) {
      headerContainer.childNodes[3].remove();
    }
  }
};

export default header;
