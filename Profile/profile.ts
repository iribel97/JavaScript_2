import { Data } from './data';

// Definición de variables con datos personales
const firstName: string = "Juan";
const lastName: string = "Pérez";
const age: number = 30;
const email: string = "juan.perez@example.com";
const isEmployed: boolean = true;

// Construcción del objeto data que contiene los datos personales
const data: Data = {
    firstName,
    lastName,
    age,
    email,
    isEmployed
};

const family: Data[] = [
    {
        firstName: "Ana",
        lastName: "Pérez",
        age: 25,
        email: "ana.perez@example.com",
        isEmployed: false
    },
    {
        firstName: "Carlos",
        lastName: "Pérez",
        age: 35,
        email: "carlos.perez@example.com",
        isEmployed: true
    }
];

console.log('Datos personales:', data);
console.log('Familiares:', family);

// muestra por consola los tipos de datos de algunos datos primitivos, de la interfaz, de los objetos y del array.
console.log('Tipo de dato de firstName:', typeof firstName);
console.log('Tipo de dato de age:', typeof age);
console.log('Tipo de dato de data:', typeof data);
console.log('Tipo de dato de family:', typeof family);
console.log('Tipo de dato de family[0]:', typeof family[0].isEmployed);