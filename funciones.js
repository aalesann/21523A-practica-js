// ! Funciones declarativas

// Implementación de la función
// function saludar(){
//     console.log('Bienvenido a mi Aplicación')
// }
// saludar()



// function saludar(nombre){
//     console.log('Bienvenido ' + nombre)
// }
// saludar("Jhon Wick")

// ! Función declarativa
// function suma(num1, num2){
//     let resultado = num1 + num2;
//     console.log(resultado)
// }
// suma(1,2)

// ! Función declarativa
// function suma(num1, num2){
//     let resultado = num1 + num2;
//     return resultado;
// }
// const resultado = suma(1,2)
// console.log(resultado)

// ! Función flecha (arrow function)
// let suma = (num1, num2) => num1 + num2

// const resultado = suma(1,2)
// console.log(resultado)

import { suma, multiplicacion, resta, division, interes } from './modularizacion.js'


// Calculadora
const calcular = (a, b, operacion) => {
    switch (operacion) {
        case "+":
            console.log(suma(a, b)) // g(f(x))
            break;
        case "-":
            console.log(resta(a, b))
            break;
        case "*":
            console.log(multiplicacion(a,b))
            break;
        case "/":
            console.log(division(a, b))
            break;
    }
}

calcular(8, 2, "/")

const resultMult = multiplicacion(3, 6)
const importeTotal = suma(interes, resultMult);
console.log(importeTotal)





























