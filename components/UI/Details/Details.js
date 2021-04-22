import Class from "./Details.module.css";
import { useSpring, animated } from "react-spring";
import { Fragment } from "react";

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
          {convertedDate == "Invalid Date" ? (
            <h5 className={Class.text}>Under Construction</h5>
          ) : (
            <Fragment>
              <h5 className={Class.text}>Date Created</h5>
              <p>{convertedDate}</p>
            </Fragment>
          )}
        </div>
        {url && (
          <div className={Class.link}>
            <h5 className={Class.text}>Link</h5>
            <a href={url} rel="noopener noreferrer" target="_blank">
              {name}
            </a>
          </div>
        )}
      </div>
    </animated.div>
  );
}
