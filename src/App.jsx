import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer';
import { movies } from './data';
import { Link } from 'react-router-dom';
import MovieCard from './components/MovieCard.jsx';
import OnlineStatusCheck from './hooks/OnlineStatusCheck';
import { useContext } from 'react';
import LanguageContext from './contexts/LanguageContext.jsx'

function App() {
  const onlineStatus = OnlineStatusCheck();
  const { language } = useContext(LanguageContext);
  if (onlineStatus === false)
    return (<div className='onlineStatus'>
      <h1> Oops! You are Offline</h1>
      <p>Please Check your internet connection</p>
    </div>
    );
  return (
    <>
      <div className='page'>
        <Header />
        <div className='hero-content'>
          <h1>{language === 'Hindi'
            ? 'अनलिमिटेड फिल्में और शो'
            : 'Unlimited Movies, TV Shows & More'}</h1>
          <p>{language === 'Hindi'
            ? 'कहीं भी देखें। कभी भी रद्द करें।'
            : 'Watch anywhere. Cancel anytime.'}</p>
          <Link className='primary-button' to={`/movies`}>{language === 'Hindi' ? 'अभी देखें' : 'Explore Now'}
          </Link>

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
      <Footer />
    </>
  );
}

export default App;