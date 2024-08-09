import Icon from '../../shared/Icon/Icon.jsx';
import css from './CategoriesList.module.css';

const CategoriesList = ({ data }) => {
  return (
    <ul className={css.categoriesList}>
      <li className={css.categoryItem}>
        <Icon iconId="icon-users" className={css.icon} />
        {data.adults} adults
      </li>
      <li className={css.categoryItem}>
        <Icon iconId="icon-mechanic" className={css.icon} />
        {data.transmission}
      </li>
      <li className={css.categoryItem}>
        <Icon iconId="icon-petrol" className={css.icon} />
        {data.engine}
      </li>
      <li className={css.categoryItem}>
        <Icon iconId="icon-food" className={css.icon} />
        {data.details.kitchen} kitchen
      </li>
      <li className={css.categoryItem}>
        <Icon iconId="icon-bed" className={css.icon} />
        {data.details.beds} beds
      </li>
      <li className={css.categoryItem}>
        <Icon iconId="icon-wind" className={css.icon} />
        {data.details.airConditioner} AC
      </li>
    </ul>
  );
};

export default CategoriesList;
