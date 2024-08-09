import { useForm } from 'react-hook-form';
import css from './BookingForm.module.css';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import Icon from '../../shared/Icon/Icon';
import { useEffect, useRef } from 'react';
import Flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const BookingForm = () => {
  const dateInputRef = useRef(null);
  let flatpickrInstance = useRef(null);

  useEffect(() => {
    if (dateInputRef.current) {
      flatpickrInstance.current = Flatpickr(dateInputRef.current, {
        dateFormat: 'Y-m-d',
      });
    }
  }, []);

  const handleClickCalendar = () => {
    if (flatpickrInstance.current) {
      flatpickrInstance.current.open();
    }
  };

  const FormSchema = Yup.object({
    name: Yup.string()
      .min(2, 'must contain at least 2 characters')
      .max(64)
      .required(),
    email: Yup.string().email().required(),
    bookingDate: Yup.string(),
    comment: Yup.string().max(120),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
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
  };

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
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
        <label className={css.labelWrapper}>
          <input
            type="email"
            {...register('email')}
            placeholder="Email"
            className={clsx(css.input, { [css.inputError]: errors.email })}
          />
          <p className={css.errorMessage}>{errors.email?.message}</p>
        </label>
        <label className={css.labelWrapper}>
          <input
            type="text"
            {...register('bookingDate')}
            placeholder="Booking date"
            ref={dateInputRef}
            className={clsx(css.input, {
              [css.inputError]: errors.bookingDate,
            })}
          />
          <button
            className={css.btnCalendar}
            type="button"
            onClick={handleClickCalendar}
          >
            <Icon className={css.icon} iconId="icon-calendar" />
          </button>
          <p className={css.errorMessage}>{errors.bookingDate?.message}</p>
        </label>
        <label className={css.labelWrapper}>
          <textarea
            {...register('comment')}
            placeholder="Comment"
            className={clsx(css.input, css.textarea, {
              [css.inputError]: errors.comment,
            })}
          ></textarea>
          <p className={css.errorMessage}>{errors.comment?.message}</p>
        </label>
        <button type="submit" className={css.btn}>
          Send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
