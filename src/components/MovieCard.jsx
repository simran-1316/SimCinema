import {Link} from 'react-router';
const MovieCard = ({ image, title,category }) => {
  return (
    <>
      <div className='card'>
        <Link to = {`/movies/${category}`}>
        <img src={image} alt={title} />
        </Link>
        
        <h3>{title}</h3>
      </div>
    </>
  )
};
export default MovieCard;