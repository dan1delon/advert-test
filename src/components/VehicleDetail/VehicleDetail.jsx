import css from './VehicleDetail.module.css';

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
              <td>{data.form}</td>
            </tr>
            <tr className={css.item}>
              <td>Length</td>
              <td>{data.length}</td>
            </tr>
            <tr className={css.item}>
              <td>Width</td>
              <td>{data.width}</td>
            </tr>
            <tr className={css.item}>
              <td>Height</td>
              <td>{data.height}</td>
            </tr>
            <tr className={css.item}>
              <td>Tank</td>
              <td>{data.tank}</td>
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
