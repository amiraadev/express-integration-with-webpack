// import "./content.css"
import image from "./ai_image.jpg"
class Content {
    render(){
        const img = document.createElement("img");
        img.src= image ;
        img.alt="couldn't find the image";
        const body = document.querySelector("body")
        const paragraph = document.createElement("p");
        paragraph.innerHTML = "random paragraph";
        body.appendChild(img);
        body.appendChild(paragraph);
    }
}
export default Content