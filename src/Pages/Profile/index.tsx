import { useLocation } from 'react-router-dom';
import './styles.css';

export const Profile = () => {
  const { state } = useLocation();

  return (
    <>
      <header>
        <div className='page-title'>
          <h1>RickPedia</h1>
          <h2>Character Profile</h2>
        </div>
      </header>
      <section className='profile-section'>
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <div>
                <h2>{state?.name}</h2>
                <img
                  className='profile-image'
                  src={state?.image}
                  alt={state?.name}
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className='flip-card-back'>
              <div>
                <p>{state?.status}</p>
                <p>{state?.species}</p>
                <p>{state?.type}</p>
                <p>{state?.gender}</p>
                <p>{state?.origin.name}</p>
                <p>{state?.location.name}</p>
                <p>{state?.episode[state.id]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
