(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(645),o=n.n(r),a=n(667),i=n.n(a),s=n(660),c=n(738),d=o()((function(e){return e[1]})),l=i()(s),u=i()(c);d.push([e.id,'@font-face {\n  font-family: "Ubuntu";\n  src: url('+l+') format("ttf");\n  font-weight: 600;\n  font-style: normal;\n}\n\nhtml {\n  font-family: "Ubuntu", Helvetica, Arial, Lucida, sans-serif;\n  background-color: black;\n  color: white;\n}\n\n#content {\n  text-align: center;\n  background-color: black;\n  width: 100%;\n  position: sticky;\n  top: 0;\n}\n\n#info {\n  background-image: url('+u+');\n  height: 969px;\n}\n\nul {\n  color: #ffffff80;\n  font-family: "Ubuntu", Helvetica, Arial, Lucida, sans-serif;\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  font-size: 25px;\n  margin: 0rem 12.5rem 0.5rem 6rem;\n}\n\nli {\n  padding: 0.5rem 7rem;\n}\n\nli.header:hover {\n  color: white;\n  text-decoration: 4px underline;\n  text-underline-offset: 6px;\n  transition: all 0.6s ease-in-out;\n}\n\nul.description {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nli.description {\n  min-width: 50%;\n  color: white;\n  font-size: 1rem;\n  padding-top: 7rem;\n  padding-bottom: 9.5rem;\n}\n\n.text {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\nh1.description {\n  font-size: 2rem;\n}\n\n.right {\n  text-align: right;\n}\n',""]);const p=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},695:e=>{var t={};e.exports=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(t[p].references++,t[p].updater(m)):t.push({identifier:u,updater:o(m,r),references:1}),i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},738:(e,t,n)=>{e.exports=n.p+"c4c809ec60d0c300b19d.jpeg"},221:(e,t,n)=>{e.exports=n.p+"fcf5ec5b5f028ab30627.png"},660:(e,t,n)=>{e.exports=n.p+"fbdecfce69a96dc73e2a.ttf"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(695),i=n.n(a),s=n(216),c=n.n(s),d=n(426),l={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=i()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};l.domAPI=o(),l.insertStyleElement=c(),t()(d.Z,l),d.Z&&d.Z.locals&&d.Z.locals;var u=n(221);(()=>{const e=document.querySelector("#content"),t=document.createElement("img");e.classList.add("sticky"),t.setAttribute("src",u),t.setAttribute("alt","salvaje-logo"),t.classList.add("mainLogo"),e.append(t);const n=document.createElement("ul"),r=document.createElement("li");r.classList.add("header"),r.textContent="El Restaurante";const o=document.createElement("li");o.classList.add("header"),o.textContent="Menú";const a=document.createElement("li");a.classList.add("header"),a.textContent="Contacto",n.append(r,o,a),e.append(n)})(),(()=>{const e=document.createElement("div");e.setAttribute("id","info");const t=document.createElement("ul");t.classList.add("description");const n=document.createElement("li");n.classList.add("description","text","right");const r=document.createElement("h1");r.classList.add("description"),r.textContent="EL LADO SALVAJE DE LA GASTRONOMÍA JAPONESA";const o=document.createElement("p");o.textContent="Donde la tradición y el misticismo de la cocina japonesa se deja pintar de sabores y técnicas de todos los rincones del mundo, justo donde los sentidos se deleitan y surge nuestro lado más salvaje, esa parte de nosotros que no se deja dominar, no ante tal experiencia gastronómica.",n.append(r,o);const a=document.createElement("li");a.classList.add("description"),t.append(n,a);const i=document.createElement("ul");i.classList.add("description");const s=document.createElement("li");s.classList.add("description","text");const c=document.createElement("h1");c.classList.add("description"),c.textContent="UN FENÓMENO MUNDIAL";const d=document.createElement("p");d.textContent="SALVAJE es donde encontrarás una fusión de gastronomía japonesa mediterránea mientras disfrutas de un diseño arquitectónico igual de exquisito y un ambiente relajado que va elevándote conforme se acerca la noche.";const l=document.createElement("p");l.textContent="El fenómeno iniciado en la ciudad de Panamá, ha llevado a artistas y famosos de Hollywood y de otros rincones del mundo, hasta nuestras puertas, convirtiéndose en un sitió obligado a visitar.",s.append(c,d,l);const u=document.createElement("li");u.classList.add("description"),i.append(u,s),e.append(t,i),document.querySelector("body").append(e)})()})()})();