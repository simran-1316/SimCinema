import { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {url, options} from '../data';
const Movies = () => {
    const {movieCategory} = useParams(); // to get the data after:
    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState('');
    const [rating, setRating] = useState(0);
    
    console.log(movieCategory); 
    const fetchMovies = async () => {
        try {
        setLoading(true); // useEffect tab tab run ho raha jab ham fetch kar rahe h ek baar render tab tak ke liye he hame loading screen show krni h toh setLoading true
        setError('');

        const res = await fetch(`${url}${movieCategory}`, options);
        const data = await res.json();
       
        setMovies(data.results);
        setFilteredMovies(data.results);
        
        } catch (err) {
            setError("⚠ Oops! We couldn't load the movies.");
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if(movieCategory) {
        fetchMovies();
        }
    },[movieCategory]);
    
    const handleFilter = (value) => {
        setRating(value);

        if(value === 0) {
            setFilteredMovies(movies);
        } else {
            const updated = movies.filter((movie)=> movie.vote_average >= value);
            setFilteredMovies(updated);
        }
    }

    return (
        <div>
            <div className='top-bar'>
                <h2 className='logo' onClick={() => navigate('/')}>
                    SimCinema</h2>
                <button className='back-btn' onClick={() => navigate('/')}>
                ← Back To Home
                </button>
            </div>
        <div className='movies-page'>
            <div className='filter-container'>
                <select 
                    value = {rating}
                    onChange={(e)=> handleFilter(Number(e.target.value))}>
                    
                    <option value = '0'>All Ratings</option>
                    <option value = '5'>5+</option>
                    <option value = '6'>6+</option>
                    <option value = '7'>7+</option>
                    <option value = '8'>8+</option>
                    
                    </select>
            </div>

        {loading && (
            <div className='movies-container'>
                {[...Array(12)].map((_, index) => (
                <div key = {index} className = 'shimmer-card'></div>
                ))}
                </div>
        )}
        
        {console.log("Movies:", movies)}
        {console.log("Filtered:", filteredMovies)}

        {error && <p className='error-text'>{error}</p>}

        {!loading && filteredMovies?.length > 0 && (
            <div className = 'movies-container'>
                {filteredMovies?.map((movie) => (
                    <div key={movie?.id} className='movie-card'>
                    <img
                        src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt = {movie.title}
                    />
                    </div>
                ))}
                </div>
        )}

        {!loading && !error && filteredMovies?.length === 0 && (
            <p className='no-results'>No Results Found</p>
        )}
        
        </div>
        </div>
    )
}
export default Movies;