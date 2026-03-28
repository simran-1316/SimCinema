import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Movies from './components/Movies';
import Error from './components/Error.jsx';
import AllMovies from './components/AllMovies.jsx';
import MovieDisplay from './components/MovieDisplay.jsx';
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />
  },
  {
    path: '/movies',
    element: <AllMovies />
  },
  {
    path: '/movies/:movieCategory',
    element: <Movies />,
    errorElement: <Error />
  },
  
  {
    path: '/movie/:movieId',
    element: <MovieDisplay />,
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <App /> */}
    <RouterProvider router={appRouter} />

  </StrictMode>,
)