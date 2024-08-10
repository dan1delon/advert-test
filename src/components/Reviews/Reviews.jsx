import ReviewstItem from '../ReviewstItem/ReviewstItem';
import css from './Reviews.module.css';

const Reviews = ({ data }) => {
  return (
    <ul className={css.list}>
      {Array.isArray(data.reviews) && data.reviews.length === 0 && (
        <li>
          <p className={css.paragraph}>There are no contacts here yet.</p>
        </li>
      )}
      {Array.isArray(data.reviews) &&
        data.reviews.map(review => {
          return (
            <li key={review.comment.length} className={css.listItem}>
              <ReviewstItem review={review} />
            </li>
          );
        })}
    </ul>
  );
};

export default Reviews;
