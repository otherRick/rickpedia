interface CharactersProps {
  name: string;
  image: string;
}

function Characters({ name, image }: CharactersProps) {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <img src={image} alt={name} width={100} height={100} />
    </div>
  );
}

export default Characters;
