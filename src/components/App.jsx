import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Toaster } from 'react-hot-toast';

const HomeContent = lazy(() => import('../pages/Home/Home'));
const MovieSearch = lazy(() => import('../pages/Movies/Movies'));
const Film = lazy(() => import('./Film/Film'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeContent />} />
          <Route path="movies" element={<MovieSearch />} />
          <Route path="movies/:movieId" element={<Film />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
