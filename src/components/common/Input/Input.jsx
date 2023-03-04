import { string } from "prop-types";
import styles from "./Input.module.scss";

const Input = ({ type, placeholder, fieldName, name }) => {
  return (
    <div className={styles.root}>
      <label htmlFor={name}>{fieldName}</label>
      <input
        name={name}
        type={type}
        className={styles.input_field}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

Input.propTypes = {
  type: string,
  placeholder: string,
  fieldName: string,
  name: string,
};

export default Input;
