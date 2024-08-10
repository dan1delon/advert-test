import { useSelector } from 'react-redux';
import CampersItem from '../CampersItem/CampersItem';
import css from './CampersList.module.css';
import { selectAdverts } from '../../redux/ads/selectors';
import { useState } from 'react';

const CampersList = () => {
  const fetchedAds = useSelector(selectAdverts);
  const [visibleAdsCount, setVisibleAdsCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleAdsCount(prevCount => prevCount + 4);
  };

  const visibleAds = fetchedAds.slice(0, visibleAdsCount);

  return (
    <div className={css.container}>
      <ul className={css.campersList}>
        {Array.isArray(visibleAds) && visibleAds.length === 0 && (
          <li>
            <p className={css.paragraph}>There are no ads here yet.</p>
          </li>
        )}
        {Array.isArray(visibleAds) &&
          visibleAds.map(ads => (
            <li key={ads._id} className={css.listItem}>
              <CampersItem data={ads} />
            </li>
          ))}
      </ul>
      {visibleAdsCount < fetchedAds.length && (
        <button type="button" className={css.btn} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CampersList;
