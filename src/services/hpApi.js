// Function to fetch Harry Potter character data
async function fetchCharacters() {
    try {
        const response = await fetch(
            'https://hp-api.onrender.com/api/characters'
        );

        if (!response.ok) {
            throw new Error("Not found");
        }

        const data = await response.json();
        const cleanedData = data
            .filter((character) => character.image && character.name)
            .map((character,index) => ({
                id: index, 
                name: character.name,
                image: character.image,
            }));
        return cleanedData; // Return the fetched and cleaned character data
    } catch (error) {
        alert("Unable to fetch  data. Please try again.");
        console.error(error);
        return []; // Return an empty array in case of error
    }
}

export default fetchCharacters;