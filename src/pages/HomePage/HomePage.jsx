import { NavLink } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.wrapperContent}>
          <h1 className={css.title}>Campers Rental</h1>
          <p className={css.paragraph}>
            Discover the freedom of the open road and the beauty of nature with
            our top-of-the-line camper rentals. Whether you’re planning a
            weekend getaway or an epic cross-country journey, we have the
            perfect camper to suit your needs.
          </p>
        </div>
        <NavLink to="/catalog" className={css.btn}>
          Start Your Adventure
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
