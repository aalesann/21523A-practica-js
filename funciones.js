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


// function suma(num1, num2){
//     let resultado = num1 + num2;
//     console.log(resultado)
// }
// suma(1,2)


// function suma(num1, num2){
//     let resultado = num1 + num2;
//     return resultado;
// }
// const resultado = suma(1,2)
// console.log(resultado)

let suma = (num1, num2) => num1 + num2

const resultado = suma(1,2)
console.log(resultado)
