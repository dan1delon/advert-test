import { useDispatch, useSelector } from 'react-redux';
import CampersList from '../../components/CampersList/CampersList';
import Sidebar from '../../components/Sidebar/Sidebar';
import css from './CatalogPage.module.css';
import { selectError, selectIsLoading } from '../../redux/ads/selectors';
import { useEffect } from 'react';
import { fetchAds } from '../../redux/ads/operations';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAds());
  }, [dispatch]);
  return (
    <>
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <div className={css.container}>
          <Sidebar />
          <CampersList />
        </div>
      )}
    </>
  );
};

export default CatalogPage;
