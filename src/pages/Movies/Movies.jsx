import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
import { fetchMoviesByNameAndAddToState } from 'components/services/fetchApi';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';

import * as Yup from 'yup';
const INPUT_NAME = 'name';

const schema = Yup.object().shape({
  name: Yup.string().required('Please enter your request'),
});

const MovieSearch = () => {
  const [films, setFils] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const location = useLocation();
  const [searchParam, setSearchParam] = useSearchParams();

  const filter = searchParam.get('filter');

  const changeFilter = value => {
    if (!value[INPUT_NAME].trim()) return;
    setSearchParam({ filter: value[INPUT_NAME].trim() });
  };

  useEffect(() => {
    if (!filter) return;
    const fetch = async () => {
      const data = await fetchMoviesByNameAndAddToState(filter);
      if (!data.length) {
        toast.error(`In this ${filter} request no find`);
        return;
      }
      setFils(data);
    };
    fetch();
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
          {...register(INPUT_NAME, { required: true })}
        />
        <p>{errors.name?.message}</p>
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
