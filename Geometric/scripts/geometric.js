import {perimetro} from "./perimeter.js";
import {area} from "./area.js";

//Definiendo 3 objetos
const rectangulo1 = {
    altura: 10,
    ancho: 20
}
const rectangulo2 = {
    altura: 30,
    ancho: 40
}
const rectangulo3 = {
    altura: 50,
    ancho: 60
}

document.querySelector("main").innerHTML = `
    <h1>Rectángulos</h1>
    <p>El perímetro del rectángulo 1 es ${perimetro(rectangulo1)}</p>
    <p>El área del rectángulo 1 es ${area(rectangulo1)}</p>
    <p>---------------------------------------------------------------</p>
    <p>El perímetro del rectángulo 2 es ${perimetro(rectangulo2)}</p>
    <p>El área del rectángulo 2 es ${area(rectangulo2)}</p>
    <p>---------------------------------------------------------------</p>
    <p>El perímetro del rectángulo 3 es ${perimetro(rectangulo3)}</p>
    <p>El área del rectángulo 3 es ${area(rectangulo3)}</p>
`;