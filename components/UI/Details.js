import Class from "./Details.module.css";
import { useSpring, animated } from "react-spring";

export default function Details(props) {
  const { name, category, desc, dateCreated, url } = props;

  const convertedDate = new Date(dateCreated).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const propsSpring = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: 70 },
  });
  return (
    <animated.div className={Class.details} style={propsSpring}>
      <h2>{name}</h2>
      <ul className={Class.category}>
        <li>{category}</li>
      </ul>
      <p>{desc}</p>
      <div className={Class.row}>
        <div className={Class.date}>
          <h5 className={Class.text}>Date</h5>
          {convertedDate == "Invalid Date" ? (
            <p>On going</p>
          ) : (
            <p>{convertedDate}</p>
          )}
        </div>
        <div className={Class.link}>
          <h5 className={Class.text}>Link</h5>
          <a href={url} rel="noopener noreferrer" target="_blank">
            {name}
          </a>
        </div>
      </div>
    </animated.div>
  );
}
