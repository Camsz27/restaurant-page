import instagramLogo from "./Images/instagram.svg";
import facebookLogo from "./Images/facebook.svg";
import telephoneLogo from "./Images/phone.png";
import contactLogo from "./Images/book.svg";

const contact = () => {
  const content = document.querySelector("#content");
  const div = document.createElement("div");
  div.setAttribute("id", "contact");

  // Creates google map
  const map = document.createElement("iframe");
  map.setAttribute("id", "map");
  map.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.596456247704!2d-74.05286978505912!3d4.665813996610804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a61d4a99c03%3A0xcba3cdced1f5e6bc!2sCl.%2083%20%239-48%2C%20Localidad%20de%20Chapinero%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1625974662761!5m2!1sen!2sco"
  );

  // Text at the footer of the page
  const span1 = document.createElement("span");
  const header = document.createElement("h3");
  const contactImage = document.createElement("img");
  contactImage.setAttribute("src", contactLogo);
  contactImage.classList.add("contact");
  header.textContent = "RESERVAR";
  span1.append(contactImage, header);
  const address = document.createElement("p");
  address.textContent = "Calle 83 # 9 – 48 Bogotá, Colombia";
  const hotel = document.createElement("p");
  hotel.textContent = "Hotel Bioxury, Bogotá";
  const span2 = document.createElement("span");
  const numero = document.createElement("h3");
  const telephoneImage = document.createElement("img");
  telephoneImage.setAttribute("src", telephoneLogo);
  telephoneImage.classList.add("icons");
  numero.textContent = "321 7556108";
  span2.append(telephoneImage, numero);
  const a1 = document.createElement("a");
  a1.setAttribute("href", "https://www.facebook.com/SalvajeBogota/");
  a1.setAttribute("target", "_blank");
  const a2 = document.createElement("a");
  a2.setAttribute("href", "https://www.instagram.com/salvajebogota/");
  a2.setAttribute("target", "_blank");
  const facebook = document.createElement("img");
  facebook.classList.add("logos");
  facebook.setAttribute("src", facebookLogo);
  a1.append(facebook);
  div.append(a1);
  const instagram = document.createElement("img");
  instagram.classList.add("logos");
  instagram.setAttribute("src", instagramLogo);
  a2.append(instagram);
  div.append(span1, address, hotel, span2, a1, a2);
  content.append(map, div);
};

export default contact;
