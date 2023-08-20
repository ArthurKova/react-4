import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './Navigation';
import Container from './Container/Container';
import Home from './views/Home';
// import Movie from './views/Movie';
// import MovieDetail from './views/MovieDetail';
// import NotFound from './views/NotFound';
const Movie = lazy(() => import('./views/Movie'));
const MovieDetail = lazy(() => import('./views/MovieDetail'));
const NotFound = lazy(() => import('./views/NotFound'));

const MovieDB = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<div>Load</div>}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:id/*" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default MovieDB;
