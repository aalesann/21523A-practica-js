//seleccionar un elemento por id
const miParrafo = document.getElementById('parrafo');
console.log(miParrafo);

//seleccionar todos los elementos que coincidan con la etiqueta
const miElementoH3 = document.getElementsByTagName('h3')
console.log(miElementoH3[0]);

// seleccionar el primer elemento que coincida con el grupo especificado
const miH2 = document.querySelector('.miEncabezadoH2')
console.log(miH2)

// seleccionar todos los elementos que coincidan con el grupo especificado
const misListas = document.querySelectorAll('.listas')
console.log(misListas)


