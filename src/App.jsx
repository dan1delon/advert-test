import { Suspense } from 'react';
import Loader from './components/Loader/Loader.jsx';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';
import Layout from './components/Layout/Layout.jsx';

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
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
