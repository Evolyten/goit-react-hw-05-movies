import { useState, useEffect } from 'react';
import { HomeList } from './HomeContentStyled';
import { fetchTrendsFilmAndAddToState } from '../../components/services/fetchApi';
import PagesItem from 'components/PagesItem/PagesItem';
const HomeContent = () => {
  const [trend, setTrends] = useState([]);
  useEffect(() => {
    fetchTrendsFilmAndAddToState(setTrends);
  }, []);

  return (
    <HomeList>
      {trend.map(trendFilm => (
        <PagesItem
          key={trendFilm.id}
          movieInfo={trendFilm}
          wayToDetailMovieInfo={`/movies/${trendFilm.id}`}
        />
      ))}
    </HomeList>
  );
};

export default HomeContent;
