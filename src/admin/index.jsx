import styles from "./styles/main.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Pesudo({ children }) {
  return (
    <section className={cx("pesudo-wraper")}>
      <section className={cx("side-bar-wrapper")}></section>
      {children}
    </section>
  );
}

export default Pesudo;
