import { ContentWrap, FilmPoster, TextWrap } from '../Film/FillmStyled';
import PropTypes from 'prop-types';

export default function FilmItem({ filmInformation }) {
  const { title, overview, vote_average, genres, release_date, poster_path } =
    filmInformation;
  return (
    <ContentWrap>
      {poster_path ? (
        <FilmPoster
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt=""
        />
      ) : (
        <p>No Img</p>
      )}
      <div>
        <h2>
          {title}({new Date(release_date).getFullYear()})
        </h2>
        <p>User Score: {Math.floor(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres ? (
          <p>
            {genres.map(n => (
              <TextWrap key={n.id}>{n.name}</TextWrap>
            ))}
          </p>
        ) : (
          <p>No genres</p>
        )}
      </div>
    </ContentWrap>
  );
}

FilmItem.propTypes = {
  filmInformation: PropTypes.object,
};
