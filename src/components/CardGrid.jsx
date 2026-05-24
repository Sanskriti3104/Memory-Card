import CharacterCard from "./CharacterCard";

function CardGrid({characters}) {
  return (
    <div className="card-grid">
      {characters.map((character) => (
        <div key={character.id}>
          <CharacterCard name={character.name} />
        </div>
      ))}
    </div>
  );
}

export default CardGrid;