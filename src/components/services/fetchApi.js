import axios from 'axios';
import toast from 'react-hot-toast';
export async function fetchTrendsFilmAndAddToState(callback) {
  try {
    const trendsFilm = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=71b9c1ee751ada432ef4ae5fbbdff5cd'
    );
    const normalizeData = dataNormalizeMoviesList(trendsFilm.data.results);
    callback(normalizeData);
  } catch (error) {
    console.log(error);
    toast.error(`${error.message}`);
  }
}

export async function fetchMoviesByNameAndAddToState(callback, filter) {
  try {
    const moviesByName = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=71b9c1ee751ada432ef4ae5fbbdff5cd&language=en-US&query=${filter}&page=1&include_adult=false`
    );
    const normalizeData = dataNormalizeMoviesList(moviesByName.data.results);
    callback(normalizeData);
  } catch (error) {
    console.log(error);
    toast.error(`${error.message}`);
  }
}

export async function fetchMovieByIdAndAddToState(callback, id) {
  try {
    const movieById = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=71b9c1ee751ada432ef4ae5fbbdff5cd&language=en-US`
    );
    const normalizeData = dataNormalizeMovieById(movieById.data);
    callback(normalizeData);
  } catch (error) {
    console.log(error);
    toast.error(`${error.message}`);
  }
}

export async function fetchMovieCastByIdAndAddToState(callback, id) {
  try {
    const castById = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=71b9c1ee751ada432ef4ae5fbbdff5cd&language=en-US`
    );
    const normalizeData = dataNormalizeMovieCast(castById.data.cast);
    callback(normalizeData);
  } catch (error) {
    console.log(error);
    toast.error(`${error.message}`);
  }
}

export async function fetchMovieReviewsByIdAndAddToState(callback, id) {
  try {
    const movieReviews = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=71b9c1ee751ada432ef4ae5fbbdff5cd&language=en-US&page=1`
    );

    const normalizeData = dataNormalizeReviewsById(movieReviews.data.results);
    callback(normalizeData);
  } catch (error) {
    console.log(error);
    toast.error(`${error.message}`);
  }
}

function dataNormalizeMoviesList(array) {
  const normalizeData = array.map(movieInfo => {
    return {
      id: movieInfo.id,
      title: movieInfo.title,
    };
  });
  return normalizeData;
}

function dataNormalizeMovieById(object) {
  const normalizeData = {
    title: object.title,
    overview: object.overview,
    vote_average: object.vote_average,
    genres: object.genres,
    release_date: object.release_date,
    poster_path: object.poster_path,
  };
  return normalizeData;
}

function dataNormalizeMovieCast(array) {
  const normalizeData = array.map(castInfo => {
    return {
      cast_id: castInfo.cast_id,
      name: castInfo.name,
      profile_path: castInfo.profile_path,
      character: castInfo.character,
    };
  });
  return normalizeData;
}

function dataNormalizeReviewsById(array) {
  const normalizeData = array.map(reviewInfo => {
    return {
      id: reviewInfo.id,
      author: reviewInfo.author,
      content: reviewInfo.content,
    };
  });
  return normalizeData;
}
