import css from './VehicleDetail.module.css';

const formatData = value => {
  return value.replace(/(\d)([a-zA-Z])/g, '$1 $2');
};

const formatString = str => {
  const spacedStr = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  return spacedStr;
};

const VehicleDetail = ({ data }) => {
  return (
    <div>
      <p className={css.title}>VehicleDetail</p>
      <div className={css.divider}></div>
      <div className={css.wrapper}>
        <table className={css.table}>
          <tbody>
            <tr className={css.item}>
              <td>Form</td>
              <td>{formatString(data.form)}</td>
            </tr>
            <tr className={css.item}>
              <td>Length</td>
              <td>{formatData(data.length)}</td>
            </tr>
            <tr className={css.item}>
              <td>Width</td>
              <td>{formatData(data.width)}</td>
            </tr>
            <tr className={css.item}>
              <td>Height</td>
              <td>{formatData(data.height)}</td>
            </tr>
            <tr className={css.item}>
              <td>Tank</td>
              <td>{formatData(data.tank)}</td>
            </tr>
            <tr className={css.item}>
              <td>Consumption</td>
              <td>{data.consumption}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehicleDetail;
