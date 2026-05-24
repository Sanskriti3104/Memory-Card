import CharacterCard from "./CharacterCard";

function CardGrid() {
  return (
    <div className="card-grid">
      { <CharacterCard /> }
      { <CharacterCard /> }
      { <CharacterCard /> }
    </div>
  );
}

export default CardGrid;