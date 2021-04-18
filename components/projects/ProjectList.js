import ProjectCard from "./ProjectCard";

import style from "./ProjectList.module.css";
import { useSpring, animated } from "react-spring";

export default function ProjectList(props) {
  const { items } = props;

  const propsSpring = useSpring({
    opacity: 1,
    marginRight: 0,
    from: { opacity: 0, marginRight: -50 },
  });

  return (
    <div className={style.project_grid}>
      <animated.div style={propsSpring}>
        {items.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              id={project.id}
              category={project.category}
              coverImage={project.coverImage}
              dateCreated={project.dateCreated}
              desc={project.desc}
              name={project.name}
            />
          );
        })}
      </animated.div>
    </div>
  );
}
