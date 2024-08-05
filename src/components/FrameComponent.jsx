import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({
  className = "",
  schedule,
  propWidth,
  flexibleSchedule,
  propFlex,
  chooseYourWorkingHoursAnd,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const flexibleScheduleStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.scheduleWrapper}>
        <img
          className={styles.scheduleIcon}
          loading="lazy"
          alt=""
          src={schedule}
        />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.flexibleScheduleWrapper} style={frameDivStyle}>
          <div
            className={styles.flexibleSchedule}
            style={flexibleScheduleStyle}
          >
            {flexibleSchedule}
          </div>
        </div>
        <div className={styles.chooseYourWorking}>
          {chooseYourWorkingHoursAnd}
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  schedule: PropTypes.string,
  flexibleSchedule: PropTypes.string,
  chooseYourWorkingHoursAnd: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
};

export default FrameComponent;
