const miLista = document.querySelector('.lista');

const elemento1 = document.createElement('li')
const elemento2 = document.createElement('li')
const elemento3 = document.createElement('li')

elemento1.textContent = "contenido del elemento 1"
elemento2.textContent = "contenido del elemento 2"
elemento3.textContent = "contenido del elemento 3"

miLista.appendChild(elemento1);
miLista.appendChild(elemento2);
miLista.appendChild(elemento3);


// otra forma de recorrer un arreglo y a partir de ahi crear elementos
const elementos = ['Primer elemento', 22, 54, 'otro texto'];

const html = elementos.map(elemento => {
    return `
        <li>${elemento}</li>
    `
}).join('')

miLista.innerHTML = html

