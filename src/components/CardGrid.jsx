import CharacterCard from "./CharacterCard";

function CardGrid({characters, handleCardClick}) {
  return (
    <div className="card-grid">
      {characters.map((character) => (
        <div key={character.id}>
          <CharacterCard name={character.name} image={character.image} onClick={() => handleCardClick(character.id)} />

        </div>
      ))}
    </div>
  );
}

export default CardGrid;