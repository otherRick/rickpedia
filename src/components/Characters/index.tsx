import './styles.css';

interface CharactersProps {
  name: string;
  image: string;
}

function Characters({ name, image }: CharactersProps) {
  return (
    <div className='char-card'>
      <h3>{name}</h3>
      <img src={image} alt={name} width={150} height={150} />
    </div>
  );
}

export default Characters;
