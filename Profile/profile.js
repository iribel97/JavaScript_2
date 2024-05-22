"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Definición de variables con datos personales
var firstName = "Juan";
var lastName = "Pérez";
var age = 30;
var email = "juan.perez@example.com";
var isEmployed = true;
// Construcción del objeto data que contiene los datos personales
var data = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    email: email,
    isEmployed: isEmployed
};
var family = [
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