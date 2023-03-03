import Image from "next/image";
import { string } from "prop-types";
import styles from "./Select.module.scss";

const Select = ({ fieldName, placeholderOption, option1, option2 }) => {
  return (
    <div className={styles.root}>
      <label>{fieldName}</label>
      <select className={styles.dropdown} defaultValue="" required>
        <option value="" disabled>
          {placeholderOption}
        </option>
        <option value="Item selected">{option1}</option>
        <option value="Item selected">{option2}</option>
      </select>
    </div>
  );
};

Select.propTypes = {
  fieldName: string,
  placeholderOption: string,
  option1: string,
  option2: string,
};

export default Select;