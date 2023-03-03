import classNames from "classnames";
import { object, string } from "prop-types";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ type, id, name, children }) => {
  return (
    <div className={styles.root}>
      <input
        type={type}
        className={classNames({
          [styles.checkbox_button]: type === "checkbox",
          [styles.radio_button]: type === "radio",
        })}
        name={name}
        id={id}
      />
      <label htmlFor={id} className={styles.label_button}></label>
      {children}
    </div>
  );
};

Checkbox.propTypes = {
  children: object,
  type: string,
  id: string,
  name: string,
};

export default Checkbox;
