import { string } from "prop-types";
import styles from "./Textarea.module.scss";

const Textarea = ({ fieldName }) => {
  return (
    <div className={styles.root}>
      <label>{fieldName}</label>
      <textarea className={styles.comment_field} required />
    </div>
  );
};

Textarea.propTypes = { fieldName: string };

export default Textarea;
