import Icon from '../../shared/Icon/Icon.jsx';
import css from './CategoriesList.module.css';

const CategoriesList = ({ data, limit }) => {
  const items = [
    data.adults !== 0 && (
      <li key="adults" className={css.categoryItem}>
        <Icon iconId="icon-users" className={css.icon} />
        {data.adults} adults
      </li>
    ),
    data.transmission !== null && (
      <li key="transmission" className={css.categoryItem}>
        <Icon iconId="icon-mechanic" className={css.icon} />
        {data.transmission}
      </li>
    ),
    data.engine !== null && (
      <li key="engine" className={css.categoryItem}>
        <Icon iconId="icon-petrol" className={css.icon} />
        {data.engine}
      </li>
    ),
    data.details.kitchen !== 0 && (
      <li key="kitchen" className={css.categoryItem}>
        <Icon iconId="icon-food" className={css.icon} />
        Kitchen
      </li>
    ),
    data.details.beds !== 0 && (
      <li key="beds" className={css.categoryItem}>
        <Icon iconId="icon-bed" className={css.icon} />
        {data.details.beds} beds
      </li>
    ),
    data.details.airConditioner !== 0 && (
      <li key="ac" className={css.categoryItem}>
        <Icon iconId="icon-wind" className={css.icon} />
        AC
      </li>
    ),
    data.details.CD !== 0 && (
      <li key="cd" className={css.categoryItem}>
        <Icon iconId="icon-cd" className={css.icon} />
        CD
      </li>
    ),
    data.details.radio !== 0 && (
      <li key="radio" className={css.categoryItem}>
        <Icon iconId="icon-radio" className={css.icon} />
        Radio
      </li>
    ),
    data.details.toilet !== 0 && (
      <li key="toilet" className={css.categoryItem}>
        <Icon iconId="icon-toilet-paper" className={css.icon} />
        Toilet
      </li>
    ),
    data.details.shower !== 0 && (
      <li key="shower" className={css.categoryItem}>
        <Icon iconId="icon-shower" className={css.icon} />
        Shower
      </li>
    ),
    data.details.freezer !== 0 && (
      <li key="freezer" className={css.categoryItem}>
        <Icon iconId="icon-freezer" className={css.icon} />
        Freezer
      </li>
    ),
    data.details.gas !== 0 && (
      <li key="gas" className={css.categoryItem}>
        <Icon iconId="icon-gas" className={css.icon} />
        Gas
      </li>
    ),
    data.details.water !== 0 && (
      <li key="water" className={css.categoryItem}>
        <Icon iconId="icon-water" className={css.icon} />
        Water
      </li>
    ),
    data.details.microwave !== 0 && (
      <li key="microwave" className={css.categoryItem}>
        <Icon iconId="icon-microwave" className={css.icon} />
        Microwave
      </li>
    ),
    data.details.hob !== 0 && (
      <li key="hob" className={css.categoryItem}>
        <Icon iconId="icon-hob" className={css.icon} />
        {data.details.hob} hob
      </li>
    ),
  ].filter(Boolean);

  const limitedItems = limit ? items.slice(0, limit) : items;

  return <ul className={css.categoriesList}>{limitedItems}</ul>;
};

export default CategoriesList;
