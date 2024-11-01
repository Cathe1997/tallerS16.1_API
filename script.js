const url = 'https://rickandmortyapi.com/api/character';

async function getCharacters() {
    try {
        const response = await fetch(url); //Realizamos la solicitud GET a la API
        if (!response.ok) throw new Error('Error en la solicitud');

        const data = await response.json();
        displayCharacters(data.results); //Enviamos los datos a la funcion para que se vizualicen
    } catch (error) {
        console.error('Error al obtener los personajes:', error);
    }
}

function displayCharacters(characters) {
    const container = document.getElementById('characters-container');
    container.innerHTML = '';

    characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.className = 'character';
        characterElement.innerHTML = `
            <h2>${character.name}</h2>
            <img src="${character.image}" alt="${character.name}">
            <p>Especie: ${character.species}</p>
            <p>Estado: ${character.status}</p>
        `;
        container.appendChild(characterElement);
    });
}

getCharacters();