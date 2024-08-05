import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({
  className = "",
  title = "Register now for just Rs. 999!",
  propTextDecoration,
  propDisplay,
  propMinWidth,
}) => {
  const signInStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propTextDecoration, propDisplay, propMinWidth]);

  return (
    <button className={[styles.button, className].join(" ")}>
      <div className={styles.signIn} style={signInStyle}>
        {title}
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Button;
