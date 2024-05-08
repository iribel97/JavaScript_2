//Defirnir las 5 variables con datos personales
const nombre = "Irina";
const apellido = "Ochoa";
const edad = 23;
const tipoDeSangre = "B+";
const carrera = "Ingeniería en Tecnologías de la Información";
let isOnline;

//Se va a repetir mientras el usuario no ingrese "si" o "no"
do {
    //Preguntar al usuario si está en línea
    isOnline = prompt("¿Estás en línea? (SI/NO)").toLowerCase();

    //Validar la respuesta con el operador ternario
    /**
     * Si lo que ingresó el usuario no es "si" ni "no", entonces mostrar un mensaje de alerta
     */
    (isOnline !== "si" && isOnline !== "no") ? alert("Por favor, ingresa una respuesta válida") : null;

} while (isOnline !== "si" && isOnline !== "no");

//Si el usuario está en línea, entonces mostrara el template string
if (isOnline === "si") {
    //Template string
    document.write(`Hola, mi nombre es ${nombre} ${apellido}, tengo ${edad} años, mi tipo de sangre es ${tipoDeSangre} y estudio la carrera de ${carrera}.`);
}

