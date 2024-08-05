import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.myfastxParent}>
        <a className={styles.myfastx}>
          <span>MyFast</span>
          <span className={styles.x}>X</span>
        </a>
        <img
          className={styles.download2Icon}
          loading="lazy"
          alt=""
          src="/download-2@2x.png"
        />
        <a className={styles.partner}>Partner</a>
      </div>
      <div className={styles.buttonParent}>
        <Button
          title="Sign up"
          propTextDecoration="none"
          propDisplay="inline-block"
          propMinWidth="43px"
        />
        <Button
          title="Login"
          propTextDecoration="none"
          propDisplay="inline-block"
          propMinWidth="31px"
        />
      </div>
    </header>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
