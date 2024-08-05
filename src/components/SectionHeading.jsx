import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./SectionHeading.module.css";

const SectionHeading = ({
  className = "",
  text = "Got Questions? We’ve Got Answers!",
  propAlignSelf,
  propHeight,
  propWidth,
}) => {
  const sectionHeadingStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      height: propHeight,
    };
  }, [propAlignSelf, propHeight]);

  const rectangleDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={[styles.sectionHeading, className].join(" ")}
      style={sectionHeadingStyle}
    >
      <h1 className={styles.sectionHeading1}>{text}</h1>
      <div className={styles.sectionHeadingChild} style={rectangleDivStyle} />
    </div>
  );
};

SectionHeading.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
};

export default SectionHeading;
