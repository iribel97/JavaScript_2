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
//Desarrollar las funciones "perímetro" y "área"
function perimetro(rectangulo){
    return 2*(rectangulo.altura + rectangulo.ancho);
}
function area(rectangulo){
    return rectangulo.altura * rectangulo.ancho;
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