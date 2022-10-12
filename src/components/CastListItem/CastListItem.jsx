import { CastImg, CastItem, TextWrap } from '../Cast/CastStyle';
import PropTypes from 'prop-types';
function photoLink(str) {
  if (!str) {
    return '#';
  }
  let baseImageUrl = 'https://image.tmdb.org/t/p/w500';
  return baseImageUrl + str;
}

export default function CastListItem({ castItemActor }) {
  const { cast_id, profile_path, character, name } = castItemActor;
  return (
    <CastItem key={cast_id}>
      <CastImg src={photoLink(profile_path)} alt={name} loading="lazy" />
      <h3>{name}</h3>
      <TextWrap>Character: {character}</TextWrap>
    </CastItem>
  );
}

CastListItem.propTypes = {
  castItemActor: PropTypes.object,
};
