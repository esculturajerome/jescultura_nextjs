import Class from "./Gallery.module.css";
import { useSpring, animated } from "react-spring";

export default function Gallery(props) {
  const { images } = props;

  const propsSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
  });

  if (images) {
    return (
      <animated.div style={propsSpring}>
        <div className={Class.gallery}>
          {images.map((image) => (
            <div key={image}>
              <img src={image} />
            </div>
          ))}
        </div>
      </animated.div>
    );
  }
  return <h1>No Images</h1>;
}
