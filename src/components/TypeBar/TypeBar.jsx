import css from './TypeBar.module.css';

const TypeBar = () => {
  return (
    <div>
      <div className={css.inputWrapper}>
        <input type="checkbox" value="AC" className={css.inputEquipment} />
        AC
      </div>
      <div className={css.inputWrapper}>
        <input
          type="checkbox"
          value="Automatic"
          className={css.inputEquipment}
        />
        Automatic
      </div>
      <div className={css.inputWrapper}>
        <input type="checkbox" value="Kitchen" className={css.inputEquipment} />
        Kitchen
      </div>
      <div className={css.inputWrapper}>
        <input type="checkbox" value="TV" className={css.inputEquipment} />
        TV
      </div>
      <div className={css.inputWrapper}>
        <input type="checkbox" value="Shower" className={css.inputEquipment} />
        Shower
      </div>
    </div>
  );
};

export default TypeBar;
