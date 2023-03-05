import { bool, func, string } from "prop-types";
import styles from "./Input.module.scss";

const Input = ({
  type,
  placeholder,
  fieldName,
  name,
  onChange,
  value,
  errors,
  touched,
}) => {
  return (
    <div className={styles.root}>
      <label htmlFor={name}>{fieldName}</label>
      <input
        name={name}
        type={type}
        className={styles.input_field}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {{ errors } && { touched } && (
        <div className={styles.error_message}>{errors}</div>
      )}
    </div>
  );
};

Input.propTypes = {
  type: string,
  placeholder: string,
  fieldName: string,
  name: string,
  onChange: func,
  value: string,
  errors: string,
  touched: bool,
};

export default Input;
