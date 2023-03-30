import { useLocation } from 'react-router-dom';

export const Single = () => {
  const { state } = useLocation();

  const { name, status, species, type, gender, origin, location, episode } = state;

  return (
    <>
      <img src={state.image} alt={state.name} width={100} height={100} />
      <p>{name}</p>
      <p>{status}</p>
      <p>{species}</p>
      <p>{type}</p>
      <p>{gender}</p>
      <p>{origin.name}</p>
      <p>{location.name}</p>
      <p>{episode[state.id]}</p>
    </>
  );
};
