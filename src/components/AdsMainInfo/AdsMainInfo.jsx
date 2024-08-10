import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favorites/slice';
import Icon from '../../shared/Icon/Icon';
import css from './AdsMainInfo.module.css';

const AdsMainInfo = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const isFavorite = Object.prototype.hasOwnProperty.call(favorites, data._id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(data));
    } else {
      dispatch(addFavorite(data));
    }
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
            <Icon
              iconId="icon_star"
              className={`${css.iconSmall} ${css.ratingIcon}`}
            />
            {data.rating}({data.reviews.length} Reviews)
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
