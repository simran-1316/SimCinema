import './App.css'
import Header from './components/Header.jsx'
import { movies } from './data';
import { Link } from 'react-router';

const MovieCard = ({ image, title }) => {
  return (
    <>
      <div className='card'>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </div>
    </>
  )
}
function App() {
  return (
    <>
      <div className='page'>
        <Header />
        <div className='hero-content'>
          <h1>Unlimited Movies, TV Shows &  More</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <Link className='primary-button' to='/movies'>Explore Now</Link>

        </div>
      </div>
      <div className='movies-section'>
        {movies.map((currentMovie) => (
          <MovieCard image={currentMovie.image} title={currentMovie.title} />
        ))}
      </div>
    </>
  );
}

export default App;