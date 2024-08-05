import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={[styles.actionContainerParent, className].join(" ")}>
      <div className={styles.actionContainer}>
        <img
          className={styles.screenshot202406221813341}
          alt=""
          src="/screenshot-20240622-181334-1@2x.png"
        />
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.bottomContentInner}>
          <div className={styles.titleContainerParent}>
            <div className={styles.titleContainer}>
              <div className={styles.driveYourSuccess}>
                Drive Your Success with MyFastX
              </div>
            </div>
            <h1 className={styles.joinUsAs}>Join Us as a Partner Driver</h1>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.areYouAContainer}>
            <p className={styles.areYouA}>
              Are you a vehicle owner looking for new opportunities? Join
              MyFastX today and become part of a dynamic network of drivers.
              With us, you’ll enjoy flexible work hours, competitive earnings,
              and the satisfaction of delivering smiles across the city.
            </p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button title="Register now for just Rs. 999!" />
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
