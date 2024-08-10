import { useDispatch, useSelector } from 'react-redux';
import CampersItem from '../CampersItem/CampersItem';
import css from './CampersList.module.css';
import { selectFavorites } from '../../redux/favorites/selectors';
import { selectFilteredAdverts } from '../../redux/filter/selectors';
import { useEffect, useState } from 'react';
import { resetFilters } from '../../redux/filter/slice';

const CampersList = ({ showFavorites = false }) => {
  const fetchedAds = useSelector(selectFilteredAdverts);
  const favorites = useSelector(selectFavorites);
  const [visibleAdsCount, setVisibleAdsCount] = useState(4);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showFavorites) {
      dispatch(resetFilters());
    }
  }, [showFavorites, dispatch]);

  const handleLoadMore = () => {
    setVisibleAdsCount(prevCount => prevCount + 4);
  };

  const adsToShow = showFavorites
    ? fetchedAds.filter(ad => ad._id in favorites)
    : fetchedAds;

  const visibleAds = adsToShow.slice(0, visibleAdsCount);

  return (
    <div className={css.container}>
      <ul className={css.campersList}>
        {Array.isArray(visibleAds) &&
          visibleAds.map(ad => (
            <li key={ad._id} className={css.listItem}>
              <CampersItem data={ad} />
            </li>
          ))}
      </ul>
      {visibleAdsCount < adsToShow.length && (
        <button type="button" className={css.btn} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CampersList;
