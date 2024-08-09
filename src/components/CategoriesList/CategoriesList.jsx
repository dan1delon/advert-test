import Icon from '../../shared/Icon/Icon.jsx';
import css from './CategoriesList.module.css';

const CategoriesList = ({ data }) => {
  return (
    <ul className={css.categoriesList}>
      {data.adults !== 0 && (
        <li className={css.categoryItem}>
          <Icon iconId="icon-users" className={css.icon} />
          {data.adults} adults
        </li>
      )}
      {data.transmission !== null && (
        <li className={css.categoryItem}>
          <Icon iconId="icon-mechanic" className={css.icon} />
          {data.transmission}
        </li>
      )}
      {data.engine !== null && (
        <li className={css.categoryItem}>
          <Icon iconId="icon-petrol" className={css.icon} />
          {data.engine}
        </li>
      )}
      {data.details.kitchen !== 0 && (
        <li className={css.categoryItem}>
          <Icon iconId="icon-food" className={css.icon} />
          Kitchen
        </li>
      )}
      {data.details.beds !== 0 && (
        <li className={css.categoryItem}>
          <Icon iconId="icon-bed" className={css.icon} />
          {data.details.beds} beds
        </li>
      )}
      {data.details.airConditioner !== 0 && (
        <li className={css.categoryItem}>
          <Icon iconId="icon-wind" className={css.icon} />
          AC
        </li>
      )}
      {data.details.CD !== 0 && (
        <li className={css.categoryItem}>
          <Icon iconId="icon-cd" className={css.icon} />
          CD
        </li>
      )}
      {data.details.radio !== 0 && (
        <li className={css.categoryItem}>
          <Icon iconId="icon-radio" className={css.icon} />
          Radio
        </li>
      )}
      {data.details.toilet !== 0 && (
        <li className={css.categoryItem}>
          <Icon iconId="icon-toilet-paper" className={css.icon} />
          Toilet
        </li>
      )}
      {data.details.shower !== 0 && (
        <li className={css.categoryItem}>
          <Icon iconId="icon-shower" className={css.icon} />
          Shower
        </li>
      )}
      {data.details.freezer !== 0 && (
        <li className={css.categoryItem}>
          <Icon iconId="icon-freezer" className={css.icon} />
          Freezer
        </li>
      )}
      {data.details.gas !== 0 && (
        <li className={css.categoryItem}>
          <Icon iconId="icon-gas" className={css.icon} />
          Gas
        </li>
      )}
      {data.details.water !== 0 && (
        <li className={css.categoryItem}>
          <Icon iconId="icon-water" className={css.icon} />
          Water
        </li>
      )}
      {data.details.microwave !== 0 && (
        <li className={css.categoryItem}>
          <Icon iconId="icon-microwave" className={css.icon} />
          Microwave
        </li>
      )}
    </ul>
  );
};

export default CategoriesList;
