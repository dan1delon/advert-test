import Icon from '../../shared/Icon/Icon';
import css from './DetailsModal.module.css';
import Tabs from '../Tabs/Tabs';

const DetailsModal = ({ data }) => {
  const ratingsLength = data.reviews.length;

  return (
    <div className={css.wrapper}>
      <div className={css.mainInfo}>
        <h3 className={css.name}>{data.name}</h3>
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
        <p className={css.price}>€{data.price}.00</p>
      </div>
      <div className={css.gallery}>
        <img src={data.gallery[0]} alt={data.name} className={css.img} />
        <img src={data.gallery[1]} alt={data.name} className={css.img} />
        <img src={data.gallery[2]} alt={data.name} className={css.img} />
      </div>
      <p className={css.description}>{data.description}</p>
      <Tabs data={data} />
    </div>
  );
};

export default DetailsModal;
