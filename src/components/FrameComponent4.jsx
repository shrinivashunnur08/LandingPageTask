import Chip from "./Chip";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={[styles.commitmentContentParent, className].join(" ")}>
      <div className={styles.commitmentContent}>
        <div className={styles.excellenceHeadingParent}>
          <div className={styles.excellenceHeading}>
            <Chip
              text="What our partner says"
              propWidth="unset"
              propDisplay="unset"
              propMinWidth="unset"
            />
            <SectionHeading
              text="Testimonials"
              propAlignSelf="unset"
              propHeight="38px"
              propWidth="160px"
            />
          </div>
          <div className={styles.atMyfastxOur}>
            At MyFastX, our commitment to excellence is reflected in the
            feedback from our valued customers. Here's what they have to say
            about their experiences with our quick and reliable delivery and
            logistics services
          </div>
        </div>
        <div className={styles.container}>
          <img
            className={styles.emptyTestimonialContent}
            alt=""
            src="/empty-testimonial-content@2x.png"
          />
        </div>
        <div className={styles.commitmentContentInner}>
          <div className={styles.chipParent}>
            <Chip
              text="Join the MyFastX Community Today!"
              propWidth="unset"
              propDisplay="unset"
              propMinWidth="unset"
            />
            <SectionHeading
              text="Ready to Get Started?"
              propAlignSelf="unset"
              propHeight="unset"
              propWidth="180px"
            />
          </div>
        </div>
        <div className={styles.dontMissOutOnThisIncrediParent}>
          <div className={styles.atMyfastxOur}>
            <span>{`Don't miss out on this incredible opportunity to be part of a leading delivery and logistics platform. Sign up now for just `}</span>
            <span className={styles.rs999}>Rs.999</span>
            <span> and start driving your way to success with MyFastX!</span>
          </div>
          <div className={styles.opportunityButtonContainer}>
            <Button
              title="Register Now"
              propTextDecoration="unset"
              propDisplay="inline-block"
              propMinWidth="75px"
            />
          </div>
        </div>
        <div className={styles.forMoreInformationContactParent}>
          <div className={styles.atMyfastxOur}>
            <p className={styles.forMoreInformation}>For more information,</p>
            <p className={styles.forMoreInformation}>Contact us at:</p>
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.contactTypes}>
              <div className={styles.contactIcons}>
                <img
                  className={styles.phoneIcon}
                  loading="lazy"
                  alt=""
                  src="/phone@2x.png"
                />
              </div>
              <div className={styles.contactValues}>
                <div className={styles.xxxxxXxxxx}>+91-XXXXX XXXXX</div>
              </div>
            </div>
            <div className={styles.contactTypes}>
              <div className={styles.contactIcons}>
                <img
                  className={styles.phoneIcon}
                  loading="lazy"
                  alt=""
                  src="/mail@2x.png"
                />
              </div>
              <div className={styles.contactValues}>
                <div className={styles.supportmyfastxcom}>
                  support@myfastx.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testimonialDivider}>
        <div className={styles.testimonialDividerChild} />
      </div>
      <div className={styles.screenshotContainer}>
        <div className={styles.testimonialContent}>
          <div className={styles.userTestimonialContent}>
            <div className={styles.testimonialDetails}>
              <div className={styles.testimonial}>
                <div className={styles.avataar1Parent}>
                  <img
                    className={styles.avataar1Icon}
                    loading="lazy"
                    alt=""
                    src="/avataar-1@2x.png"
                  />
                  <div className={styles.authorName}>
                    <div className={styles.jamesDarwin}>James Darwin</div>
                  </div>
                </div>
                <div className={styles.kolkataWestBengal}>
                  Kolkata, West Bengal
                </div>
              </div>
            </div>
            <div className={styles.review}>
              <blockquote className={styles.joiningMyfastxHas}>
                “ Joining MyFastX has been a game-changer for me. The flexible
                hours and reliable income have made my life so much easier. “
              </blockquote>
              <div className={styles.rating}>
                <div className={styles.stars}>
                  <div className={styles.starContainer}>
                    <img
                      className={styles.starIcon}
                      loading="lazy"
                      alt=""
                      src="/star@2x.png"
                    />
                    <img
                      className={styles.starIcon}
                      loading="lazy"
                      alt=""
                      src="/star@2x.png"
                    />
                    <img
                      className={styles.starIcon}
                      loading="lazy"
                      alt=""
                      src="/star@2x.png"
                    />
                    <img
                      className={styles.starIcon}
                      alt=""
                      src="/star@2x.png"
                    />
                    <img
                      className={styles.starIcon}
                      alt=""
                      src="/star@2x.png"
                    />
                  </div>
                  <div className={styles.ratingBarsParent}>
                    <div className={styles.ratingBars} />
                    <div className={styles.ratingBars1} />
                    <div className={styles.ratingBars1} />
                    <div className={styles.ratingBars1} />
                    <div className={styles.ratingBars1} />
                    <div className={styles.ratingBars1} />
                  </div>
                </div>
                <div className={styles.placeholder}>
                  <div className={styles.emptyContainer}>
                    <img
                      className={styles.emptyRatingElements}
                      alt=""
                      src="/empty-rating-elements.svg"
                    />
                    <img
                      className={styles.emptyRatingElements}
                      alt=""
                      src="/empty-rating-elements1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fAQ}>
            <div className={styles.fAQTitle}>
              <Chip text="Frequently Asked Questions" />
              <SectionHeading text="Got Questions? We’ve Got Answers!" />
            </div>
            <div className={styles.faqList}>
              <div className={styles.faqItems}>
                <div className={styles.whatTypeOf}>
                  What type of vehicles are eligible?
                </div>
                <div className={styles.answerPlaceholder}>
                  <img
                    className={styles.answerContainersIcon}
                    alt=""
                    src="/answer-containers.svg"
                  />
                </div>
              </div>
              <div className={styles.faqItems1}>
                <div className={styles.howDoI}>How do I get paid ?</div>
                <div className={styles.frameWrapper}>
                  <img
                    className={styles.answerContainersIcon}
                    loading="lazy"
                    alt=""
                    src="/answer-containers.svg"
                  />
                </div>
              </div>
              <div className={styles.faqItems}>
                <div className={styles.whatTypeOf}>
                  What areas does MyFastX operate in?
                </div>
                <div className={styles.frameWrapper}>
                  <img
                    className={styles.answerContainersIcon}
                    loading="lazy"
                    alt=""
                    src="/answer-containers.svg"
                  />
                </div>
              </div>
              <div className={styles.faqItems}>
                <div className={styles.whatTypeOf}>
                  What type of vehicles are eligible?
                </div>
                <div className={styles.frameWrapper}>
                  <img
                    className={styles.answerContainersIcon}
                    loading="lazy"
                    alt=""
                    src="/answer-containers.svg"
                  />
                </div>
              </div>
              <div className={styles.faqItems1}>
                <div className={styles.howDoI1}>How do I get paid?</div>
                <div className={styles.frameWrapper}>
                  <img
                    className={styles.answerContainersIcon}
                    loading="lazy"
                    alt=""
                    src="/answer-containers.svg"
                  />
                </div>
              </div>
              <div className={styles.faqItems}>
                <div className={styles.whatTypeOf}>
                  What areas does MyFastX operate in?
                </div>
                <div className={styles.frameWrapper}>
                  <img
                    className={styles.answerContainersIcon}
                    loading="lazy"
                    alt=""
                    src="/answer-containers.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
