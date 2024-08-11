import Icon from '../../shared/Icon/Icon.jsx';
import css from './CategoriesList.module.css';

const CategoriesList = ({ data, limit }) => {
  const categories = [
    {
      condition: data.adults !== 0,
      iconId: 'icon-users',
      label: `${data.adults} adults`,
    },
    {
      condition: data.transmission !== null,
      iconId: 'icon-mechanic',
      label: data.transmission,
    },
    {
      condition: data.engine !== null,
      iconId: 'icon-petrol',
      label: data.engine,
    },
    {
      condition: data.details.kitchen !== 0,
      iconId: 'icon-food',
      label: 'Kitchen',
    },
    {
      condition: data.details.beds !== 0,
      iconId: 'icon-bed',
      label: `${data.details.beds} beds`,
    },
    {
      condition: data.details.airConditioner !== 0,
      iconId: 'icon-wind',
      label: 'AC',
    },
    { condition: data.details.CD !== 0, iconId: 'icon-cd', label: 'CD' },
    {
      condition: data.details.radio !== 0,
      iconId: 'icon-radio',
      label: 'Radio',
    },
    {
      condition: data.details.toilet !== 0,
      iconId: 'icon-toilet-paper',
      label: 'Toilet',
    },
    {
      condition: data.details.shower !== 0,
      iconId: 'icon-shower',
      label: 'Shower',
    },
    {
      condition: data.details.freezer !== 0,
      iconId: 'icon-freezer',
      label: 'Freezer',
    },
    { condition: data.details.gas !== 0, iconId: 'icon-gas', label: 'Gas' },
    {
      condition: data.details.water !== 0,
      iconId: 'icon-water',
      label: 'Water',
    },
    {
      condition: data.details.microwave !== 0,
      iconId: 'icon-microwave',
      label: 'Microwave',
    },
    {
      condition: data.details.hob !== 0,
      iconId: 'icon-hob',
      label: `${data.details.hob} hob`,
    },
  ];

  const items = categories
    .filter(category => category.condition)
    .map(category => (
      <li key={category.iconId} className={css.categoryItem}>
        <Icon iconId={category.iconId} className={css.icon} />
        {category.label}
      </li>
    ));

  const limitedItems = limit ? items.slice(0, limit) : items;

  return <ul className={css.categoriesList}>{limitedItems}</ul>;
};

export default CategoriesList;
