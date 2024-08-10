import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        Oops! Something went wrong while fetching ads. Please try again later.
      </p>
    </div>
  );
};

export default ErrorMessage;
