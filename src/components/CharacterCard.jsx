function CharacterCard(props) {
  return(
    <div className="character-card">
      <img src="character-image.jpg" alt={props.name} />
      <p className="character-name">{props.name}</p>
    </div>
  );
}

export default CharacterCard;