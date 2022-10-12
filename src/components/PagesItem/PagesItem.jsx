import { NavLink, useLocation } from 'react-router-dom';
import { HomeItem } from '../../pages/Home/HomeContentStyled';
import PropTypes from 'prop-types';

export default function PagesItem({ movieInfo, wayToDetailMovieInfo }) {
  const location = useLocation();
  const { id, title } = movieInfo;
  return (
    <HomeItem key={id}>
      <NavLink to={`${wayToDetailMovieInfo}`} state={{ from: location }}>
        {title}
      </NavLink>
    </HomeItem>
  );
}

PagesItem.propTypes = {
  movieInfo: PropTypes.object,
  wayToDetailMovieInfo: PropTypes.string,
};
