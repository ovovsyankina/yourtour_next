import styles from "./Select.module.scss";
import { array, string } from "prop-types";

const Select = ({ fieldName, placeholderOption, options, name }) => {
  return (
    <div className={styles.root}>
      <label htmlFor={name}>{fieldName}</label>
      <select name={name} className={styles.dropdown} defaultValue="">
        <option value="" disabled className={styles.placeholder}>
          {placeholderOption}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
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
