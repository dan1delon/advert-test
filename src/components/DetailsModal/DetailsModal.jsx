import Icon from '../../shared/Icon/Icon';
import css from './DetailsModal.module.css';
import Tabs from '../Tabs/Tabs';
import clsx from 'clsx';

const DetailsModal = ({ data }) => {
  const ratingsLength = data.reviews.length;

  return (
    <div className={css.wrapper}>
      <div className={css.mainInfo}>
        <h3 className={css.name}>{data.name}</h3>
        <div className={css.ratingWrapper}>
          <p className={css.rating}>
            <Icon
              iconId="icon_star"
              className={clsx(css.iconSmall, css.ratingIcon)}
            />
            {data.rating} ({ratingsLength} Reviews)
          </p>
          <p className={css.location}>
            <Icon iconId="icon-map-pin" className={css.iconSmall} />
            {data.location}
          </p>
        </div>
        <p className={css.price}>€{data.price}.00</p>
      </div>
      <div className={css.gallery}>
        {data.gallery.slice(0, 3).map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={data.name} className={css.img} />
        ))}
      </div>
      <p className={css.description}>{data.description}</p>
      <Tabs data={data} />
    </div>
  );
};

export default DetailsModal;
