// ! Condicionales
// let a = 2,
//     b = "dos";

//? True - False
// if(1 == "1"){
//    console.log('Es cierto') 
// } else {
//     console.log('No es cierto')
// }

//? True - False
// if(1 === "1"){
//    console.log('Es cierto') 
// } else {
//     console.log('No es cierto')
// }

//? True - False
// if(1 != 1){
//    console.log('Es cierto') 
// } else {
//     console.log('No es cierto')
// }

//? True - False
// if(1 !== "1"){
//    console.log('Es cierto') 
// } else {
//     console.log('No es cierto')
// }

// if(a === +b){
//    console.log('Es cierto')
// } else {
//     console.log('No es cierto')
//     console.log(+b) // Not a Number NaN
// }

// let a = 2;

// a = a + 3;

// a += 5;

// a++;

// a--;

// a -= 5;

// console.log(a)

// Saber si el número es par
// 10 % 2 = 0
// if((10 % 2) === 0){
//     console.log('Es Par')
// } else {
//     console.log('No es Par')
// }


// Operador de comparación Mayor y Menor
// let a = 6, b = 5;

// if(a <= b){
//     console.log('Es cierto')
// } else {
//     console.log('No es cierto')
// }



// let dia = 1;

// if (dia === 1) {
//     console.log('Lunes')
// } else if (dia === 2) {
//     console.log('Martes')
// } else if (dia === 3) {
//     console.log('Miércoles')
// } else if (dia === 4) {
//     console.log('Jueves')
// } else if (dia === 5) {
//     console.log('Viernes')
// } else if (dia === 6) {
//     console.log('Sábado')
// } else if (dia === 7) {
//     console.log('Domingo')
// } else {
//     console.log('El valor ingresado no es correcto')
// }

// let dia = 3;
// switch (dia) {
//     case 1:
//         console.log('Lunes')
//         break;
//     case 2:
//         console.log('Martes')
//         break;
//     case 3:
//         console.log('Miércoles')
//         break;
//     case 4:
//         console.log('Jueves')
//         break;
//     case 5:
//         console.log('Viernes')
//         break;
//     case 6:
//         console.log('Sábado')
//         break;
//     case 7:
//         console.log('Domingo')
//         break;
//     default:
//         console.log('El valor debe ser entre 1 y 7')
//         break;
// }

// let a = true, b = false;

// if(a || b){
//     console.log('Verdadero')
// } else {
//     console.log('Falso')
// }

// let a = false;
// let c = a || 5000;
// console.log(c)

// ! ESTRUCTURAS DE CONTROL REPETITIVAS
// let tabla = 5
// for (let i = 0; i <= 10; i++) {
//     if (tabla === 5) {
//         console.log(`5 x ${i} = ${i * 5}`)
//     }
// }


// let tabla2 = 5;
// let i = 0;

// while (tabla2 === 5) {
//     console.log(`5 x ${i} = ${i * 5}`)
//     i++

//     if (i > 10) {
//         tabla2 = 2;
//     }
// }

// let tabla2 = 5;
// let i = 0;
// do {
//     console.log(`5 x ${i} = ${i * 5}`)
//     i++

//     if (i > 10) {
//         tabla2 = 2;
//     }
// } while (tabla2 === 5);

// !OPERADOR TERNARIO
// (1 === 1)
//     ? console.log('Es Cierto')
//     : console.log('No es Cierto')

// if (1 === 1) {
//     console.log('Es Cierto')
// } else {
//     console.log('No es Cierto')
// }

let dia = 6;
(dia === 1)
    ? console.log('Lunes')
    : (dia === 2)
        ? console.log('Martes')
        : (dia === 3)
            ? console.log('Miercoles')
            : (dia === 4)
                ? console.log('Jueves')
                : (dia === 5)
                    ? console.log('Viernes')
                    : (dia === 6)
                        ? console.log('Sábado')
                        : (dia === 7)
                            ? console.log('Domingo')
                            : console.log('El valor ingresado no es correcto')

                            console.log(dia)
                            console.log('Fin del programa')

// ! DEPURACIÓN Y BREAKPOINTS

// let a = 5;

// let b = 2;

// a = 2;

// a = b**2;

// console.log(a)
// console.log(b)