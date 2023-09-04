//seleccionar el elemento
const miParrafo = document.getElementById('parrafo')
const contenedorBody = document.querySelector('.contenedor')
const input = document.querySelector('.miInput')

const boton = document.querySelector('.btn')

// accedo o cambio el valor de los textos
// console.log({ miParrafo })
// console.log(miParrafo.textContent)
// console.log(miParrafo.className)
miParrafo.style.color = "blue"

// console.log(input.value)

boton.addEventListener('click', () => {
    // contenedorBody.classList.add('nocturno')
    //si tiene la clase lo quita, sino lo coloca
    contenedorBody.classList.toggle('nocturno')

    if (contenedorBody.classList.contains('nocturno')) {
        boton.textContent = "Modo dia"
    } else {
        boton.textContent = "Modo nocturno"
    }
})

input.addEventListener('change', (event) => {
    miParrafo.textContent = event.target.value
})
