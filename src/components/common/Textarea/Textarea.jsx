import { func, string } from "prop-types";
import styles from "./Textarea.module.scss";

const Textarea = ({ fieldName, name, value, onChange }) => {
  return (
    <div className={styles.root}>
      <label htmlFor={name}>{fieldName}</label>
      <textarea
        name={name}
        className={styles.comment_field}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

Textarea.propTypes = {
  fieldName: string,
  name: string,
  value: string,
  onChange: func,
};

export default Textarea;
