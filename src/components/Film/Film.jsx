import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { PageWrap, AdditInfo } from './FillmStyled';
import { fetchMovieByIdAndAddToState } from 'components/services/fetchApi';
import FilmItem from 'components/FilmItem/FilmItem';
import styled from 'styled-components';

const NavSecond = styled(NavLink)`
  display: block;
`;

const Film = () => {
  const { movieId } = useParams();
  const [filmInfo, setFilmInfo] = useState({});
  const location = useLocation();

  useEffect(() => {
    fetchMovieByIdAndAddToState(setFilmInfo, movieId);
  }, [movieId]);

  return (
    <PageWrap>
      <NavLink to={location.state.from}>Go Back</NavLink>
      <FilmItem filmInformation={filmInfo} />
      <AdditInfo>
        <h3>Additional information</h3>
        <NavSecond state={{ from: location.state.from }} to={'cast'}>
          Cast
        </NavSecond>
        <NavSecond state={{ from: location.state.from }} to={'reviews'}>
          Reviews
        </NavSecond>
      </AdditInfo>
      <Outlet />
    </PageWrap>
  );
};

export default Film;
