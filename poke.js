async function fetchData() {
    try {
        const pokemonName = document
            .getElementById("pokemonName")
            .value
            .trim()
            .toLowerCase()
            .replace(/\./g, "")      
            .replace(/\s+/g, "-");   

const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

if (!response.ok) {
throw new Error("Could not fetch Pokémon");
 }

const data = await response.json();

    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

imgElement.src = pokemonSprite;
imgElement.style.display = "block";
}
    catch (error) {
        console.error(error);
        alert("Pokémon not found");
    }
}
