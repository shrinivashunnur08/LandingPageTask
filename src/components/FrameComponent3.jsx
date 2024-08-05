import Button from "./Button";
import FrameComponent from "./FrameComponent";
import Chip from "./Chip";
import SectionHeading from "./SectionHeading";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.heroImageContainerParent}>
          <div className={styles.heroImageContainer}>
            <img
              className={styles.httpslottiefilescomanimatIcon}
              alt=""
              src="/httpslottiefilescomanimationstruckdlhb36ze6b@2x.png"
            />
          </div>
          <div className={styles.welcomeToMyfastxPartnerQuiParent}>
            <div className={styles.welcomeToMyfastxContainer}>
              <p className={styles.welcomeToMyfastxPartner}>
                <span className={styles.welcomeToMyfast}>
                  Welcome to MyFast
                </span>
                <span>X Partner</span>
              </p>
              <p className={styles.welcomeToMyfastxPartner}>&nbsp;</p>
              <p
                className={styles.welcomeToMyfastxPartner}
              >{`Quick & Reliable Delivery and Logistics Solution`}</p>
            </div>
            <div className={styles.atMyfastxWeAreRevolutioniWrapper}>
              <div className={styles.atMyfastxWe}>
                At MyFastX, we are revolutionizing the delivery and logistics
                industry by providing swift, dependable services to our clients.
                Our mission is to ensure every package reaches its destination
                on time, every time.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.nestedDriveSuccessParent}>
          <div className={styles.nestedDriveSuccess}>
            <img
              className={styles.nestedDriveSuccessChild}
              loading="lazy"
              alt=""
              src="/frame-14324.svg"
            />
            <div className={styles.benefitOneParent}>
              <div className={styles.benefitOne}>
                <div className={styles.driveYourSuccess}>
                  Drive Your Success with MyFastX
                </div>
                <h2 className={styles.joinUsAs}>Join Us as a Partner Driver</h2>
              </div>
              <div className={styles.vehicleOwner}>
                <div className={styles.atMyfastxWe}>
                  <p className={styles.welcomeToMyfastxPartner}>
                    Are you a vehicle owner looking for new opportunities? Join
                    MyFastX today and become part of a dynamic network of
                    drivers. With us, you’ll enjoy flexible work hours,
                    competitive earnings, and the satisfaction of delivering
                    smiles across the city.
                  </p>
                </div>
              </div>
              <Button
                title="Register now for just Rs. 999!"
                propTextDecoration="unset"
                propDisplay="unset"
                propMinWidth="unset"
              />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.incomeIconsParent}>
              <div className={styles.incomeIcons}>
                <img
                  className={styles.transactionIcon}
                  loading="lazy"
                  alt=""
                  src="/transaction@2x.png"
                />
              </div>
              <div className={styles.incomeDescriptions}>
                <div className={styles.reliableIncomeWrapper}>
                  <div className={styles.reliableIncome}>
                    <span>Reliable Income</span>
                    <span className={styles.span}>{` `}</span>
                  </div>
                </div>
                <div className={styles.earnASteady}>
                  Earn a steady income with consistent delivery requests.
                </div>
              </div>
            </div>
            <FrameComponent
              schedule="/schedule@2x.png"
              flexibleSchedule="Flexible Schedule"
              chooseYourWorkingHoursAnd="Choose your working hours and balance your personal life."
            />
            <FrameComponent
              schedule="/online-support@2x.png"
              propWidth="124px"
              flexibleSchedule="Support"
              propFlex="1"
              chooseYourWorkingHoursAnd="Access our dedicated support team whenever you need assistance."
            />
            <FrameComponent
              schedule="/increase@2x.png"
              propWidth="unset"
              flexibleSchedule="Growth opportuninies"
              propFlex="unset"
              chooseYourWorkingHoursAnd="Advance your career with regular training and development programs."
            />
          </div>
        </div>
      </div>
      <div className={styles.chipParent}>
        <Chip
          text="How It Works"
          propWidth="98px"
          propDisplay="inline-block"
          propMinWidth="78px"
        />
        <div className={styles.registrationContentParent}>
          <div className={styles.registrationContent}>
            <SectionHeading
              text="Simple Steps to Get Started"
              propAlignSelf="unset"
              propHeight="unset"
              propWidth="160px"
            />
            <div className={styles.registrationSteps}>
              <div className={styles.registrationStepsContainer}>
                <FrameComponent1
                  addUserMale="/add-user-male@2x.png"
                  registerOnline="Register Online"
                  fillOutOurEasyOnlineAppli="Fill out our easy online application form and pay the registration fee of Rs. 999"
                />
                <FrameComponent1
                  addUserMale="/verified-account@2x.png"
                  registerOnline="Get Verified"
                  propMinWidth="72px"
                  fillOutOurEasyOnlineAppli="Complete the verification process to ensure you meet our standards."
                />
                <FrameComponent1
                  addUserMale="/jeep@2x.png"
                  registerOnline="Start Driving"
                  propMinWidth="76px"
                  fillOutOurEasyOnlineAppli="Once approved, start accepting delivery requests and earn money"
                />
              </div>
            </div>
          </div>
          <div className={styles.httpslottiefilescomanimatWrapper}>
            <img
              className={styles.httpslottiefilescomanimatIcon1}
              loading="lazy"
              alt=""
              src="/httpslottiefilescomanimationsvehiclesk7qobnjup7@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
