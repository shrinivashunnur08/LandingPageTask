import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  className = "",
  addUserMale,
  registerOnline,
  propMinWidth,
  fillOutOurEasyOnlineAppli,
}) => {
  const registerOnlineStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.nestedStepIconsWrapper}>
        <div className={styles.nestedStepIcons}>
          <div className={styles.iconContainer}>
            <img
              className={styles.addUserMale}
              loading="lazy"
              alt=""
              src={addUserMale}
            />
          </div>
        </div>
      </div>
      <div className={styles.lineWrapper}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.registerOnlineParent}>
        <div className={styles.registerOnline} style={registerOnlineStyle}>
          {registerOnline}
        </div>
        <div className={styles.fillOutOur}>{fillOutOurEasyOnlineAppli}</div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  addUserMale: PropTypes.string,
  registerOnline: PropTypes.string,
  fillOutOurEasyOnlineAppli: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default FrameComponent1;
