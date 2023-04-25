for (let i = 0; i <= 5; i++) {
    const url2 = `https://pokeapi.co/api/v2/pokemon/${i}/`

fetch(url2)
.then(resultado =>{
    
    return resultado.json()
})
.then(resultado =>{
    console.log(resultado.sprites.back_default);
    console.log(resultado);
    imprimirpokemon(resultado)
})
}

function imprimirpokemon(resultado) {
    let tipo = resultado.types[0].type.name
    let habilidades = resultado.habilities[0].hability.name
    let habilidades2 = resultado.habilities[1].hability.name
    let imagen = resultado.sprites.front_default
    const {base_experience, id, name} = resultado
    const card = document.createElement(`div`)
    card.classList.add(`card`)
    card.innerHTML = `
    <div class="card-body">
    <img style="width: 150px; height: 150px;" src="${imagen}">
        <h5 class="card-title">${name}</h5>
        <p class="card-text"> Habilidades: ${habilidades} ${habilidades2}</p>
        <p class="card-text"> Experiencia Base: ${base_experience}</p>
        <p class="card-text"> ID: ${id}</p>
        <p class="card-text"> Tipo: ${tipo} </p>
    </div>
    `
    document.querySelector(`.pokemon`).appendChild(card)
}