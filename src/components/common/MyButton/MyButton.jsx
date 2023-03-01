import { string } from "prop-types";
import styles from "./MyButton.module.scss";

const MyButton = ({ title, type, className }) => {
  return (
    <button type={type} className={className}>
      {title}
    </button>
  );
};

MyButton.propTypes = {
  title: string,
  type: string,
  className: string,
};

export default MyButton;
