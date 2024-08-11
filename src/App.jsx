import { Suspense, lazy, memo } from 'react';
import Loader from './components/Loader/Loader.jsx';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const FavoritesPage = lazy(() =>
  import('./pages/FavoritesPage/FavoritesPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);

const MemoizedLoader = memo(Loader);

function App() {
  return (
    <Layout>
      <Suspense fallback={<MemoizedLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
