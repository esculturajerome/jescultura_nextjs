import Class from "./ProfileBanner.module.css";
import { useSpring, animated } from "react-spring";

export default function ProfileBanner() {
  const propsSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 400,
  });

  const SpringDelay = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1500,
  });

  const SpringTop = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -20 },
    delay: 650,
  });

  return (
    <animated.div style={propsSpring} className={Class.ProfileBanner}>
      <div className={Class.ProfileSection}>
        <div className={Class.ProfileText}>
          <h1>Jerome Escultura</h1>
          <animated.div style={SpringTop}>
            <p>
              My passion is web development and design, and the ever-changing
              software and programming languages that create it.
            </p>
          </animated.div>
        </div>
        <animated.div style={SpringDelay} className={Class.ProfileImage}>
          <img src="/images/jerome.png" alt="Jerome Escultura" />
        </animated.div>
      </div>
    </animated.div>
  );
}
