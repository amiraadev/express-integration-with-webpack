import Header from './components/header/header.js'
import Content from './components/content/content.js'

const header = new Header();
const content = new Content();

    header.render();
    content.render();


// function addImage() {
//     document.addEventListener("DOMContentLoaded", () => {
//         const img = document.createElement('img');
//         img.alt = "altText";
//         img.width = 300;
//         // img.src = image;
//         img.src = "./components/content/ai_image.jpg";

//         // Append the image to the existing body
//         document.body.appendChild(img);
//     });
// }
// addImage()