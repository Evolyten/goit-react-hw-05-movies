import PropTypes from 'prop-types';

export default function ReviewsListItem({ reviewsInfo }) {
  const { id, author, content } = reviewsInfo;
  return (
    <li key={id}>
      <h3>Author:{author}</h3>
      <p>{content}</p>
    </li>
  );
}

ReviewsListItem.propTypes = {
  reviewsInfo: PropTypes.object,
};
