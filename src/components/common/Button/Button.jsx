import { string } from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ title, type, className }) => {
  return (
    <button type={type} className={className}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: string,
  type: string,
  className: string,
};

export default Button;
