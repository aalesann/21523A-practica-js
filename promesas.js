const promesa = new Promise((resolve, reject) => {
    if(false === true){
        resolve('Tarea asíncrona realizada con éxito')
        return
    } else {
        reject('Error al realizar tarea')
    }
})


promesa
.then( msg => {
    console.log(msg)
    // La siguiente instrucción irá a continuación
})
.catch( err => {
    console.log(err)
})