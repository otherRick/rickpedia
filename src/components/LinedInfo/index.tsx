import './styles.css';

interface LinedInfoProps {
  title: string;
  content: string;
}

export const LinedInfo = ({ title, content }: LinedInfoProps) => {
  return (
    <div className='container'>
      <h4>{title}</h4>
      <p>{content === '' || content === 'unknown' ? '-' : content}</p>
    </div>
  );
};
