import clsx from 'clsx';
import LocationBar from '../LocationBar/LocationBar';
import TypeBar from '../TypeBar/TypeBar';
import VehicleBar from '../VehicleBar/VehicleBar';
import css from './Sidebar.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const Sidebar = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      bookingDate: '',
      comment: '',
    },
  });

  const onSubmit = data => {
    console.log(data);
    reset();
    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <label className={css.labelWrapper}>
          <input
            type="text"
            {...register('name')}
            placeholder="Name"
            className={clsx(css.input, { [css.inputError]: errors.name })}
          />
          <p className={css.errorMessage}>{errors.name?.message}</p>
        </label>
        <button type="submit" className={css.btn}>
          Send
        </button>
      </form>
      <LocationBar />
      <TypeBar />
      <VehicleBar />
    </div>
  );
};

export default Sidebar;
