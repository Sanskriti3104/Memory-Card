import CharacterCard from "./CharacterCard";

function CardGrid({ characters, handleCardClick, difficulty }) {
  return (
    <div className={`card-grid ${difficulty}`}>
      {characters.map((character) => (
        <div key={character.id}>
          <CharacterCard name={character.name} image={character.image} onClick={() => handleCardClick(character.id)} />

        </div>
      ))}
    </div>
  );
}

export default CardGrid;