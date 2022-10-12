import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CastList } from './CastStyle';
import { fetchMovieCastByIdAndAddToState } from 'components/services/fetchApi';
import CastListItem from 'components/CastListItem/CastListItem';
export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCastByIdAndAddToState(setCast, movieId);
  }, [movieId]);

  return (
    <CastList>
      {cast.length !== 0 ? (
        cast.map(n => {
          return <CastListItem key={n.cast_id} castItemActor={n} />;
        })
      ) : (
        <div>No info about cast</div>
      )}
    </CastList>
  );
};
