import { string } from "prop-types";
import styles from "./Input.module.scss";

const Input = ({ type, placeholder, fieldName }) => {
  return (
    <div className={styles.root}>
      <label>{fieldName}</label>
      <input
        type={type}
        className={styles.input_field}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

Input.propTypes = { type: string, placeholder: string, fieldName: string };

export default Input;
