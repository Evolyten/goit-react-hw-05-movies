import { useState, useEffect } from 'react';
import { HomeList } from './HomeContentStyled';
import { fetchTrendsFilmAndAddToState } from '../../components/services/fetchApi';
import PagesItem from 'components/PagesItem/PagesItem';
const HomeContent = () => {
  const [trend, setTrends] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchTrendsFilmAndAddToState();
      setTrends(data);
    };
    fetch();
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
