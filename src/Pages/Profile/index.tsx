import { useLocation } from 'react-router-dom';
import './styles.css';
import { LinedInfo } from '../../components/LinedInfo';

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
                <h2>{state?.name}</h2>
                <LinedInfo title='Status:' content={state?.status} />
                <LinedInfo title='Specie:' content={state?.species} />
                <LinedInfo title='Type:' content={state?.type} />
                <LinedInfo title='Gender:' content={state?.gender} />
                <LinedInfo title='Name:' content={state?.name} />
                <LinedInfo title='Origin:' content={state?.origin.name} />
                <LinedInfo title='Location:' content={state?.location.name} />
                <LinedInfo title='Episode:' content={state?.episode[state.id]} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
