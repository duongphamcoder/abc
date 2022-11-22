import styles from "../../styles/main.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function FormDataItem({ label, id, children }) {
  return (
    <div className={cx("form-data-item")}>
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}

export default FormDataItem;
