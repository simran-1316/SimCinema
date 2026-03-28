import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { options, url } from '../data';
import LanguageContext from '../contexts/LanguageContext';
import OnlineStatusCheck from '../hooks/OnlineStatusCheck';
const AllMovies = () => {
    const navigate = useNavigate();
    const { language } = useContext(LanguageContext);

    const [nowPlaying, setNowPlaying] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const onlineStatus = OnlineStatusCheck();

    const fetchAllMovies = async () => {
        try {
            setLoading(true);
            setError('');

            const [nowPlayingRes, popularRes, topRatedRes, upcomingRes] =
                await Promise.all([
                    fetch(`${url}now_playing`, options),
                    fetch(`${url}popular`, options),
                    fetch(`${url}top_rated`, options),
                    fetch(`${url}upcoming`, options),
                ]);

            const nowPlayingData = await nowPlayingRes.json();
            const popularData = await popularRes.json();
            const topRatedData = await topRatedRes.json();
            const upcomingData = await upcomingRes.json();

            setNowPlaying(nowPlayingData.results);
            setPopular(popularData.results);
            setTopRated(topRatedData.results);
            setUpcoming(upcomingData.results);
        } catch (err) {
            setError('⚠️ Failed to load movies');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllMovies();
    }, []);

    const renderMovies = (movies) => {
        return (
            <div className="row-container">
                {movies?.map((movie) => (
                    <div key={movie.id} className="row-card">
                        <Link to={`/movie/${movie.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        );
    };
    if (onlineStatus === false) {
        return (<div className='onlineStatus'>
            <h1> Oops! You are Offline</h1>
            <p>Please Check your internet connection</p>
        </div>
        );
    }

    return (
        <div className="all-movies-page">

            <div className="top-bar">
                <h2 className="logo" onClick={() => navigate('/')}>
                    {language === 'Hindi' ? 'सिमसिनेमा' : 'SimCinema'}
                </h2>

                <button className="back-btn" onClick={() => navigate('/')}>
                    {language === 'Hindi' ? '← होम पर वापस जाएं' : '← Back To Home'}
                </button>
            </div>

            {loading && (
                    <>
                        {[1,2,3,4].map((section) => (
                        <div key={section}>
                            <div className="shimmer-title"></div>

                            <div className="row-container">
                            {[...Array(8)].map((_, index) => (
                                <div key={index} className="row-card shimmer-card"></div>
                            ))}
                            </div>
                        </div>
                        ))}
                    </>
                    )}
            {error && <p className="error-text">{error}</p>}

            {!loading && !error && (
                <>
                    <section>
                        <h2 className="section-title">
                            {language === 'Hindi' ? 'अब चल रही फिल्में' : 'Now Playing'}
                        </h2>
                        {renderMovies(nowPlaying)}
                    </section>

                    <section>
                        <h2 className="section-title">
                            {language === 'Hindi' ? 'लोकप्रिय फिल्में' : 'Popular'}
                        </h2>
                        {renderMovies(popular)}
                    </section>

                    <section>
                        <h2 className="section-title">
                            {language === 'Hindi' ? 'टॉप रेटेड' : 'Top Rated'}
                        </h2>
                        {renderMovies(topRated)}
                    </section>

                    <section>
                        <h2 className="section-title">
                            {language === 'Hindi' ? 'आने वाली फिल्में' : 'Upcoming'}
                        </h2>
                        {renderMovies(upcoming)}
                    </section>
                </>
            )}
        </div>
    );
};

export default AllMovies;
