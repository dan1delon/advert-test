import { useState } from 'react';
import Icon from '../../shared/Icon/Icon';
import css from './AdsMainInfo.module.css';

const AdsMainInfo = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const ratingsLength = data.reviews.length;

  const toggleFavorite = () => {
    setIsFavorite(prevState => !prevState);
  };

  return (
    <>
      <div className={css.infoWrapper}>
        <div className={css.nameWrapper}>
          <h3 className={css.name}>{data.name}</h3>
          <div className={css.priceWrapper}>
            <p className={css.price}>€{data.price}.00</p>
            <button
              type="button"
              className={css.favorite}
              onClick={toggleFavorite}
            >
              <Icon
                iconId={isFavorite ? 'icon-heart-pressed' : 'icon-heart'}
                className={css.iconHeart}
              />
            </button>
          </div>
        </div>
        <div className={css.ratingWrapper}>
          <p className={css.rating}>
            <Icon iconId="icon_star" className={css.iconSmall} />
            {data.rating}({ratingsLength} Reviews)
          </p>
          <p className={css.location}>
            <Icon iconId="icon-map-pin" className={css.iconSmall} />
            {data.location}
          </p>
        </div>
      </div>
      <p className={css.description}>{data.description}</p>
    </>
  );
};

export default AdsMainInfo;
