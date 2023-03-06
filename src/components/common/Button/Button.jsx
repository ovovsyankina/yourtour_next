import { func, string } from "prop-types";

const Button = ({ title, type, className, onClick }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: string,
  type: string,
  className: string,
  onClick: func,
};

export default Button;
