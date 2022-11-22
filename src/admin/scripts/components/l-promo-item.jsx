import styles from "../../styles/main.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function PromoItem({ id, code, percent, amount, maxAmount, expire, status, onClick }) {
  return (
    <tr
      className={cx("promo-table-item")}
      key={id + "promo-item"}
      onClick={(e) => {
        onClick(e, id);
      }}
    >
      <td>
        <p>{code}</p>
      </td>
      <td>
        <p>{percent}</p>
      </td>
      <td>
        <p>{amount}</p>
      </td>
      <td>
        <p>{maxAmount}</p>
      </td>
      <td>
        <p>{expire}</p>
      </td>
      <td>
        <p>{status}</p>
      </td>
    </tr>
  );
}

export default PromoItem;
