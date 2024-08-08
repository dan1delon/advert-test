import CampersList from '../../components/CampersList/CampersList';
import Sidebar from '../../components/Sidebar/Sidebar';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <div className={css.container}>
      <Sidebar />
      <CampersList />
    </div>
  );
};

export default CatalogPage;
