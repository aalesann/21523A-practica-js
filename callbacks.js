function mostrarMensaje(nombre){
    return "Bienvenid@ al servidor " + nombre
}

const mostrarOtroMensaje = (nombre) => {
    return `Bienvenid@ ${nombre}`
}

// Esta debe recibir un callback
const darBienvenida = (nombre, callback) => {
    const saludo = callback(nombre)
    console.log(saludo)
}


darBienvenida("Alejandro", mostrarMensaje)
