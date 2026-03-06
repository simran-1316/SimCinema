import { useRouteError } from 'react-router';
import { Link } from 'react-router';
const Error = () => {
    const error = useRouteError(); // code not found 404 comes from this
    return (
        <>
            <div className='error-container'>
                <h1 className='error-code'>{error.status || '404'}</h1>

                <h2 className='error-title'>OOPS! Something Went Wrong</h2>

                <p className='error-message'>
                    {error.statusText || 'The page you are looking for does not exist.'}
                </p>
                <Link to='/' className='home-btn'>Go Back Home</Link>
            </div>

        </>
    )
};
export default Error;