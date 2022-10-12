import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
import { fetchMoviesByNameAndAddToState } from 'components/services/fetchApi';

const MovieSearch = () => {
  const [films, setFils] = useState([]);
  const { register, handleSubmit, reset, formState } = useForm();
  const location = useLocation();
  const [searchParam, setSearchParam] = useSearchParams();

  const filter = searchParam.get('filter');

  const changeFilter = value => {
    setSearchParam({ filter: value['name'] });
  };

  useEffect(() => {
    if (!filter) return;
    fetchMoviesByNameAndAddToState(setFils, filter);
  }, [filter]);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: '' });
    }
  }, [formState, reset]);

  return (
    <>
      <form onSubmit={handleSubmit(changeFilter)}>
        <input type="submit" />

        <input
          onChange={e => changeFilter(e.target.value)}
          {...register('name', { required: true })}
        />
      </form>
      <ul>
        {films.map(requestFilm => (
          <li key={requestFilm.id}>
            <NavLink to={`${requestFilm.id}`} state={{ from: location }}>
              {requestFilm.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieSearch;
