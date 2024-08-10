import { useDispatch, useSelector } from 'react-redux';
import CampersList from '../../components/CampersList/CampersList';
import { selectFavorites } from '../../redux/favorites/selectors';
import css from './FavoritesPage.module.css';
import { useEffect } from 'react';
import { fetchAds } from '../../redux/ads/operations';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAds());
  }, [dispatch]);

  return (
    <div className={css.container}>
      {Object.keys(favorites).length === 1 && (
        <p className={css.message}>
          You don&apos;t have any favorites ads here yet :(
        </p>
      )}
      <CampersList showFavorites={true} />
    </div>
  );
};

export default FavoritesPage;
