import { string } from "prop-types";
import styles from "./Textarea.module.scss";

const Textarea = ({ fieldName, name }) => {
  return (
    <div className={styles.root}>
      <label htmlFor={name}>{fieldName}</label>
      <textarea name={name} className={styles.comment_field} required />
    </div>
  );
};

Textarea.propTypes = { fieldName: string, name: string };

export default Textarea;
