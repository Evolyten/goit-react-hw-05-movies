import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviewsByIdAndAddToState } from 'components/services/fetchApi';
import ReviewsListItem from 'components/ReviewsListItem/ReviewsListItem';
export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviewsByIdAndAddToState(setReviews, movieId);
  }, [movieId]);

  return (
    <ul>
      {reviews.length !== 0 ? (
        reviews.map(review => (
          <ReviewsListItem key={review.id} reviewsInfo={review} />
        ))
      ) : (
        <p>No reviews</p>
      )}
    </ul>
  );
};
