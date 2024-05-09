//Datos personales
const nombre = "Irina";
const apellido = "Ochoa";
const edad = 23;
const fechaNacimiento = "30/11/2000";
const carrera = "Ingeniería en Tecnologías de la Información";

//definir la variable todos
let {...todos} = hobbies;

//Definiendo un objeto usando property shorthand
const datosPersonales = {
    nombre,
    apellido,
    edad,
    fechaNacimiento,
    carrera
};
let respuesta;
do{
    respuesta = prompt("Esta en linea? SI/NO").toUpperCase();
    (respuesta !== "SI" && respuesta !== "NO") && alert("Respuesta inválida");

}while(respuesta !== "SI" && respuesta !== "NO");

if(respuesta === "SI"){
    printProfile();
    console.log(todos)
}

function printProfile(id = "etiqueta3") {
    const container = document.getElementById(id);

    // Se crea el template
    const template = `
    Hola, mi nombre es ${datosPersonales.nombre} ${datosPersonales.apellido},
    tengo ${datosPersonales.edad} años, nací el ${datosPersonales.fechaNacimiento} y estudio la carrera de ${datosPersonales.carrera}.
    `;

    // Se imprime el template en el contenedor
    container.innerHTML = template;
}

