import styles from "./Checkbox.module.scss";
import classNames from "classnames";
import { bool, func, object, string } from "prop-types";

const Checkbox = ({ type, id, name, children, onChange, checked }) => {
  return (
    <div className={styles.root}>
      <input
        type={type}
        onChange={onChange}
        className={classNames({
          [styles.checkbox_button]: type === "checkbox",
          [styles.radio_button]: type === "radio",
        })}
        name={name}
        id={id}
        checked={checked}
      />
      <label htmlFor={id} className={styles.label_button} />
      {children}
    </div>
  );
};

Checkbox.propTypes = {
  children: object,
  type: string,
  id: string,
  name: string,
  onChange: func,
  checked: bool,
};

export default Checkbox;
