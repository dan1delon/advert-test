import css from './CampersItem.module.css';
import CategoriesList from '../CategoriesList/CategoriesList';
import AdsMainInfo from '../AdsMainInfo/AdsMainInfo';
import { useModal } from '../../context/modalContext.jsx';
import DetailsModal from '../DetailsModal/DetailsModal';

const CampersItem = ({ data }) => {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal(<DetailsModal data={data} />);
  };

  return (
    <div className={css.wrapper}>
      <img src={data.gallery[0]} alt={data.name} className={css.img} />
      <div className={css.info}>
        <AdsMainInfo data={data} />
        <CategoriesList data={data} limit={6} />
        <button type="button" className={css.btn} onClick={handleClick}>
          Show More
        </button>
      </div>
    </div>
  );
};

export default CampersItem;
