export default async () => {
    let peticion = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281");
    let data = await peticion.json();
    return data.results;
}