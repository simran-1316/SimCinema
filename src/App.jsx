import './App.css'
import Header from './components/Header.jsx'
import { movies } from './data';
import { Link } from 'react-router-dom';
import MovieCard from './components/MovieCard.jsx';

function App() {
  return (
    <>
      <div className='page'>
        <Header />
        <div className='hero-content'>
          <h1>Unlimited Movies, TV Shows &  More</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <Link className='primary-button' to={`/movies`}>Explore Now</Link>

        </div>
      </div>
      <div className='movies-section'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} 
          title={movie.title} 
          image={movie.image} 
          category={movie.category}
          />
        ))}
      </div>
    </>
  );
}

export default App;