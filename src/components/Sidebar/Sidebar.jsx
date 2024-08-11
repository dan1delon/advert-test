import clsx from 'clsx';
import css from './Sidebar.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  changeEquipmentFilter,
  changeLocationFilter,
  changeTransmissionFilter,
  changeTypeFilter,
} from '../../redux/filter/slice';
import Icon from '../../shared/Icon/Icon';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [selectedEquipments, setSelectedEquipments] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    setValue,

    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      location: '',
      equipment: [],
      type: '',
      transmission: '',
    },
  });

  useEffect(() => {
    setValue('equipment', selectedEquipments);
  }, [selectedEquipments, setValue]);

  const onSubmit = data => {
    dispatch(changeLocationFilter(data.location));
    dispatch(changeTypeFilter(data.type));
    dispatch(changeEquipmentFilter(data.equipment));
    dispatch(changeTransmissionFilter(data.transmission));

    reset();
    setSelectedEquipments([]);
    setSelectedType('');
  };

  const handleCheckboxChange = event => {
    const value = event.target.value;
    setSelectedEquipments(prev =>
      event.target.checked
        ? [...prev, value]
        : prev.filter(item => item !== value)
    );
  };

  const handleRadioChange = event => {
    setSelectedType(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <label className={css.labelWrapper}>
        <span className={css.labelParagraph}>Location</span>
        <input
          type="text"
          {...register('location')}
          placeholder="City"
          className={clsx(css.input, { [css.inputError]: errors.location })}
        />
      </label>
      <div className={css.wrapperEquipment}>
        <span className={css.labelParagraph}>Filters</span>
        <p className={css.labelTitle}>Vehicle equipment</p>
        <div className={css.checkboxWrapper}>
          <label
            className={clsx(css.labelCheckbox, {
              [css.active]: selectedEquipments.includes('airConditioner'),
            })}
          >
            <input
              type="checkbox"
              value="airConditioner"
              {...register('equipment')}
              className={clsx(css.checkboxHidden)}
              onChange={handleCheckboxChange}
            />
            <Icon iconId="icon-wind" className={css.icon} />
            AC
          </label>
          <label
            className={clsx(css.labelCheckbox, {
              [css.active]: selectedEquipments.includes('automatic'),
            })}
          >
            <input
              type="checkbox"
              value="automatic"
              {...register('transmission')}
              className={clsx(css.checkboxHidden)}
              onChange={handleCheckboxChange}
            />
            <Icon iconId="icon-mechanic" className={css.icon} />
            Automatic
          </label>
          <label
            className={clsx(css.labelCheckbox, {
              [css.active]: selectedEquipments.includes('kitchen'),
            })}
          >
            <input
              type="checkbox"
              value="kitchen"
              {...register('equipment')}
              className={clsx(css.checkboxHidden)}
              onChange={handleCheckboxChange}
            />
            <Icon iconId="icon-food" className={css.icon} />
            Kitchen
          </label>
          <label
            className={clsx(css.labelCheckbox, {
              [css.active]: selectedEquipments.includes('TV'),
            })}
          >
            <input
              type="checkbox"
              value="TV"
              {...register('equipment')}
              className={clsx(css.checkboxHidden)}
              onChange={handleCheckboxChange}
            />
            <Icon iconId="icon-tv" className={css.icon} />
            TV
          </label>
          <label
            className={clsx(css.labelCheckbox, {
              [css.active]: selectedEquipments.includes('shower'),
            })}
          >
            <input
              type="checkbox"
              value="shower"
              {...register('equipment')}
              className={clsx(css.checkboxHidden)}
              onChange={handleCheckboxChange}
            />
            <Icon iconId="icon-shower" className={css.icon} />
            Shower/WC
          </label>
        </div>
      </div>
      <div className={css.typeWrapper}>
        <p className={css.labelTitle}>Vehicle type</p>
        <div className={css.radioWrapper}>
          <label
            className={clsx(css.labelRadio, css.labelRadioVan, {
              [css.active]: selectedType === 'panelTruck',
            })}
          >
            <input
              type="radio"
              value="panelTruck"
              {...register('type')}
              className={clsx(css.radioHidden)}
              onChange={handleRadioChange}
            />
            <Icon iconId="icon-camper-1" className={css.icon} />
            Van
          </label>
          <label
            className={clsx(css.labelRadio, css.labelRadioIntegrated, {
              [css.active]: selectedType === 'fullyIntegrated',
            })}
          >
            <input
              type="radio"
              value="fullyIntegrated"
              {...register('type')}
              className={clsx(css.radioHidden)}
              onChange={handleRadioChange}
            />
            <Icon iconId="icon-camper-2" className={css.icon} />
            Fully Integrated
          </label>
          <label
            className={clsx(css.labelRadio, css.labelRadioAlcove, {
              [css.active]: selectedType === 'alcove',
            })}
          >
            <input
              type="radio"
              value="alcove"
              {...register('type')}
              className={clsx(css.radioHidden)}
              onChange={handleRadioChange}
            />
            <Icon iconId="icon-camper-3" className={css.icon} />
            Alcove
          </label>
        </div>
      </div>
      <button type="submit" className={css.btn}>
        Search
      </button>
    </form>
  );
};

export default Sidebar;
