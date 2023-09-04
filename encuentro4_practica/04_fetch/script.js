fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
        const dataFinal = data.results.splice(0, 10)

        console.log(dataFinal)

        const personajes = dataFinal.map(personaje => {
            return `
            <div class="col-4 mb-5">
                    <div class="card" style="width: 18rem;">
                        <img src="${personaje.image}" class="card-img-top"
                            alt="${personaje.name}">
                        <div class="card-body">
                            <h5 class="card-title">${personaje.name}</h5>
                            <p class="card-text">${personaje.species}</p>
                        </div>
                    </div>
            </div>
            `
        }).join('')

        const contenedor = document.querySelector('.row');

        contenedor.innerHTML = personajes;

    })
