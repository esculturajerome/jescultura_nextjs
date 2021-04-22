import Router from "next/router";
import { useSpring, animated } from "react-spring";

import Class from "./Header.module.css";

export default function Header() {
  const handleClick = (e) => {
    e.preventDefault();
    Router.push("/");
  };

  const propsSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const SpringDelay = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -20 },
    delay: 150,
  });

  const SpringLeftSide = useSpring({
    opacity: 1,
    marginLeft: 0,
    from: { opacity: 0, marginLeft: -20 },
    delay: 250,
  });

  return (
    <animated.div style={propsSpring} className={Class.headerSection}>
      <div className={Class.header}>
        <div className={Class.title}>
          <h1 onClick={handleClick}>jescultura.com</h1>
          <animated.div style={SpringDelay}>
            <p>Jerome Escultura Website Portfolio</p>
          </animated.div>
        </div>
        <nav className={Class.nav}>
          <ul>
            <animated.div style={SpringLeftSide} className={Class.navLinks}>
              <li onClick={handleClick}>My Projects</li>
              {/* <li onClick={handleClick}>My Projects</li> */}
            </animated.div>
          </ul>
        </nav>
      </div>
    </animated.div>
  );
}
