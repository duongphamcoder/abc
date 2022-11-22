import Input from "../scripts/components/input";
import Button from "../scripts/components/button";
import FormDataItem from "../scripts/components/form-data-item";
import { useCallback, useState } from "react";
import { validateDataForm } from "../scripts/helpers/validation";
import Select from "../scripts/components/select";

const percents = new Array(101).fill(1).map((item, index) => ({
  title: index,
  value: index,
}));

const statuss = new Array(2).fill(1).map((item, index) => ({
  title: `${Boolean(index)}`,
  value: `${Boolean(index)}`,
}));

function PopUpPromo({ cx, id, code, amount, percent, maxAmount, status, expire, onClick }) {
  const [codeUpdate, setCode] = useState(code);
  const [percentUpdate, setPercent] = useState(percent);
  const [amountUpdate, setAmount] = useState(amount);
  const [maxAmountUpdate, setMaxAmount] = useState(maxAmount);
  const [expireUpdate, setExpires] = useState(expire);
  const [statusUpdate, setStatus] = useState(status);

  const onSubmit = (event) => {
    event.preventDefault();
    const obj = {
      codeUpdate,
      percentUpdate: parseInt(percentUpdate),
      amountUpdate,
      maxAmountUpdate,
      expireUpdate,
      statusUpdate,
    };
    const valid = validateDataForm(obj);
    if (valid) {
      alert("Update");
    }
  };

  const onDelete = useCallback((id) => {
    console.log(id);
  }, []);

  return (
    <section
      className={cx("overlay")}
      onClick={(e) => {
        onClick();
      }}
    >
      <form
        action="#"
        className={cx("form-wrapper")}
        onSubmit={onSubmit}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <h2 className={cx("heading")}>add promotion</h2>
        <section className={cx("form-data")}>
          <FormDataItem label="code" id="code">
            <Input
              type="text"
              name="codeUpdate"
              value={codeUpdate}
              placeholder="Enter code.."
              onChange={(event) => {
                setCode(event.target.value);
              }}
            />
          </FormDataItem>
          <FormDataItem label="percent" id="percent">
            <Select
              datas={percents}
              name="percentUpdate"
              value={percentUpdate}
              onChange={(event) => {
                setPercent(event.target.value);
              }}
            />
          </FormDataItem>
          <FormDataItem label="status" id="status">
            <Select
              datas={statuss}
              name="statusUpdate"
              value={statusUpdate}
              onChange={(event) => {
                setStatus(event.target.value);
              }}
            />
          </FormDataItem>
          <FormDataItem label="amount" id="amount">
            <Input
              type="text"
              name="amountUpdate"
              value={amountUpdate}
              placeholder="Enter amount.."
              onChange={(event) => {
                setAmount(event.target.value);
              }}
            />
          </FormDataItem>
          <FormDataItem label="max amount" id="maxAmount">
            <Input
              type="text"
              name="maxAmountUpdate"
              value={maxAmountUpdate}
              placeholder="Enter max amount.."
              onChange={(event) => {
                setMaxAmount(event.target.value);
              }}
            />
          </FormDataItem>
          <FormDataItem label="expire" id="expire">
            <Input
              type="date"
              name="expireUpdate"
              value={expireUpdate}
              onChange={(event) => {
                setExpires(event.target.value);
              }}
            />
          </FormDataItem>
        </section>
        <Button type="submit" title="submit" onClick={onSubmit} />
        <Button
          type="button"
          title="delete"
          onClick={(e) => {
            onDelete(id);
          }}
        />
      </form>
    </section>
  );
}

export default PopUpPromo;
