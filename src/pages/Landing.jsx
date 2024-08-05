import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <FrameComponent2 />
      <div className={styles.landingChild} />
      <FrameComponent3 />
      <section className={styles.objectsParent}>
        <img
          className={styles.objectsIcon}
          loading="lazy"
          alt=""
          src="/objects@2x.png"
        />
        <img className={styles.frameChild} alt="" src="/line-49.svg" />
      </section>
      <div className={styles.landingItem} />
      <FrameComponent4 />
      <FrameComponent5 />
    </div>
  );
};

export default Landing;
