import CharacterCard from "./CharacterCard";

function CardGrid() {
  return (
    <div className="card-grid">
      <CharacterCard name="Harry Potter" />
      <CharacterCard name="Hermione Granger" />
      <CharacterCard name="Ron Weasley" />
    </div>
  );
}

export default CardGrid;