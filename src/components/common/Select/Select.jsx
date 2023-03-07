import styles from "./Select.module.scss";
import { array, string } from "prop-types";

const Select = ({
  fieldName,
  placeholderOption,
  options,
  name,
  value,
  onChange,
  errors,
  touched,
}) => {
  return (
    <div className={styles.root}>
      <label htmlFor={name}>{fieldName}</label>
      <select
        name={name}
        className={styles.dropdown}
        onChange={onChange}
        value={value}
      >
        <option value="" disabled className={styles.placeholder}>
          {placeholderOption}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {errors && touched && (
        <div className={styles.error_message}>{errors}</div>
      )}
    </div>
  );
};

Select.propTypes = {
  fieldName: string,
  placeholderOption: string,
  options: array,
  name: string,
};

export default Select;
