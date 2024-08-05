import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Chip.module.css";

const Chip = ({
  className = "",
  text = "Frequently Asked Questions",
  propWidth,
  propDisplay,
  propMinWidth,
}) => {
  const chipStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const textStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={[styles.chip, className].join(" ")} style={chipStyle}>
      <div className={styles.text} style={textStyle}>
        {text}
      </div>
    </div>
  );
};

Chip.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Chip;
