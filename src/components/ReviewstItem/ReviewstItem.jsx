import RatingStars from '../RatingStars/RatingStars';
import css from './ReviewstItem.module.css';

const ReviewstItem = ({ review }) => {
  const { reviewer_name, reviewer_rating, comment } = review;

  return (
    <div className={css.wrapper}>
      <div className={css.infoWrapper}>
        <div className={css.namePicture}>{reviewer_name[0]}</div>
        <div className={css.nameWrapper}>
          <p className={css.name}>{reviewer_name}</p>
          <RatingStars rating={reviewer_rating} />
        </div>
      </div>
      <p className={css.text}>{comment}</p>
    </div>
  );
};

export default ReviewstItem;
