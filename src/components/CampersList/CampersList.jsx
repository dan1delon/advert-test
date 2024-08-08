import CampersItem from '../CampersItem/CampersItem';
import css from './CampersList.module.css';

const CampersList = () => {
  return (
    <ul className={css.campersList}>
      <CampersItem />
      <CampersItem />
      <CampersItem />
      <CampersItem />
    </ul>
  );
};

export default CampersList;
