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
        return data; // Return the fetched character data
    } catch (error) {
        alert("Unable to fetch  data. Please try again.");
        console.error(error);
    }
}

export default fetchCharacters;