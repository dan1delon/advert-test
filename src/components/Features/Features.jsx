import CategoriesList from '../CategoriesList/CategoriesList';
import VehicleDetail from '../VehicleDetail/VehicleDetail';
import css from './Features.module.css';

const Features = ({ data }) => {
  return (
    <div className={css.container}>
      <CategoriesList data={data} />
      <VehicleDetail data={data} />
    </div>
  );
};

export default Features;
