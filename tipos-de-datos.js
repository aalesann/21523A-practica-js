

//! PRIMITIVOS

// let a, b, c;
// let nombrePersona, apellidoPersona, ciudad;

// nombrePersona = 'John';
// apellidoPersona = 'Doe';
// ciudad = "Buenos Aires";
// const premisa = true;
// var edad = 39;
// let vacio = null;
// console.log(vacio);

//! COMPLEJOS - ESTRUCTURADOS

//! Objetos literales
// let producto = {
//     marca: "X",
//     precio: 100,
// }

// console.log(producto.precio + 22)

// ! Objeto Literal
// let persona = {
//     nombre: "John",
//     apellido: "Doe",
//     edad: "23",
//     dni: 34345222,
//     correr: function(){
//         console.log('Estoy corriendo')
//     }
// }
// console.log(persona.correr())

//! Desestructuración de objetos literales
// let persona = {
//     nombre: "John",
//     apellido: "Doe",
//     edad: "23",
//     dni: 34345222,
//     correr: function(){
//         console.log('Estoy corriendo')
//     }
// }
// persona = "Jane"
// console.log(persona)


//! Arreglos
// let lista0 = []

// let listaNueva = [1, 2, 3, 4, 5]

// let lista = ["Ale", 2, { nombre: "John", apellido: "Doe" }, true]

//! Desestructuración de arreglos
// const [, numero , alguien, valor ] = lista;

// console.log(lista[0])
// console.log(lista[1])
// console.log(lista[2].nombre)
// console.log(lista[2].apellido)
// console.log(lista[3])

// console.log(nombre)
// console.log(numero)
// console.log(alguien.nombre)
// console.log(valor)


// ! MANIPULACIÓN DE OBJETOS
const JohnDoe = {
    nombre: "John",
    apellido: "Doe",
    edad: "23",
    dni: 34345222,
    domicilio: {
        pais: "EEUU",
        ciudad: "New York",
        calle: "Edificio Principal"
    },
    correr: function(kms = 0){
        console.log('Estoy corriendo ' + kms + 'kms')
    },
    decirNombre: function(){
        console.log(`Mi nombre completo es ${this.nombre} ${this.apellido}`)
    }
}

JohnDoe.correr(10)
JohnDoe.decirNombre()


// const JohnWick = JohnDoe;

// ! Solución 1
// const JohnWick = Object.assign({}, JohnDoe);

// ! Solución 2
// const JohnWick = JSON.parse(JSON.stringify(JohnDoe))
// JohnWick.nombre = "Johnatan"
// JohnWick.domicilio.pais = "Mexico"
// console.log(JohnDoe.domicilio)
// console.log(JohnWick.domicilio)







