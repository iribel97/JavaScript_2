//Objeto con datos personales
const profile = {
    nombre: "Irina",
    apellido: "Ochoa",
    edad: 23,
    tipoDeSangre: "B+",
    carrera: {
        nombre: "Ingeniería en Tecnologías de la Información",
        semestreActual: 9
    }
};
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
    document.write(`Hola, mi nombre es ${profile.nombre} ${profile.apellido}, 
    tengo ${profile.edad} años, mi tipo de sangre es ${profile.tipoDeSangre} 
    y estudio la carrera de ${profile.carrera.nombre} en el semestre ${profile.carrera.semestreActual} de un total
    de ${profile.carrera?.toalSemestre || 10} semestres.`);
}

