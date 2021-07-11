import menuLogo from "./Images/menu-logo.svg";
import menuDoc from "./Images/menu-doc.pdf";
import img1dir from "./Images/menu/img1.jpeg";
import img2dir from "./Images/menu/img2.jpeg";
import img3dir from "./Images/menu/img3.jpeg";
import img4dir from "./Images/menu/img4.jpeg";
import img5dir from "./Images/menu/img5.jpeg";
import img6dir from "./Images/menu/img6.jpeg";
import img7dir from "./Images/menu/img7.jpeg";
import img8dir from "./Images/menu/img8.jpeg";

// Creates the content of the menu section
const menu = () => {
  const content = document.querySelector("#content");
  const menuDiv = document.createElement("div");
  menuDiv.setAttribute("id", "menu");
  const img = document.createElement("img");
  img.setAttribute("id", "menuLogo");
  img.setAttribute("src", menuLogo);
  menuDiv.append(img);
  const button = document.createElement("h1");
  const link = document.createElement("a");
  link.setAttribute("id", "link");
  button.classList.add("menuButton");
  link.textContent = "MENÙ";
  link.setAttribute("href", menuDoc);
  link.setAttribute("target", "_blank");
  button.append(link);
  menuDiv.append(button);
  content.append(menuDiv);

  // Shows the sample images from the menu
  const imageDiv = document.createElement("div");
  imageDiv.setAttribute("id", "imageContainer");
  const img1 = document.createElement("img");
  img1.setAttribute("src", img1dir);
  imageDiv.append(img1);
  const img2 = document.createElement("img");
  img2.setAttribute("src", img2dir);
  imageDiv.append(img2);
  const img3 = document.createElement("img");
  img3.setAttribute("src", img3dir);
  imageDiv.append(img3);
  const img4 = document.createElement("img");
  img4.setAttribute("src", img4dir);
  imageDiv.append(img4);
  const img5 = document.createElement("img");
  img5.setAttribute("src", img5dir);
  imageDiv.append(img5);
  const img6 = document.createElement("img");
  img6.setAttribute("src", img6dir);
  imageDiv.append(img6);
  const img7 = document.createElement("img");
  img7.setAttribute("src", img7dir);
  imageDiv.append(img7);
  const img8 = document.createElement("img");
  img8.setAttribute("src", img8dir);
  imageDiv.append(img1);
  imageDiv.append(img2);
  imageDiv.append(img3);
  imageDiv.append(img4);
  imageDiv.append(img5);
  imageDiv.append(img6);
  imageDiv.append(img7);
  imageDiv.append(img8);
  content.append(imageDiv);
};

export default menu;
