import Icon from '../../shared/Icon/Icon';
import css from './RatingStars.module.css';

const RatingStars = ({ rating }) => {
  const stars = Array(5)
    .fill(false)
    .map((_, index) => index < rating);

  return (
    <div className={css.ratingStars}>
      {stars.map((filled, index) => (
        <span key={index} className={filled ? css.filledStar : css.emptyStar}>
          <Icon iconId="icon_star" className={css.icon} />
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
