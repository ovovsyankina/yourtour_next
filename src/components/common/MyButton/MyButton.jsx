import styles from "./MyButton.module.scss";

const MyButton = ({ title, type, className }) => {
  return (
    <div className={styles.root}>
      <button type={type} className={className}>
        {title}
      </button>
    </div>
  );
};
export default MyButton;
