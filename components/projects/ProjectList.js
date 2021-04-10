import ProjectCard from "./ProjectCard";

import style from "./ProjectList.module.css";

export default function ProjectList(props) {
  const { items } = props;

  return (
    <div className={style.project_grid}>
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
    </div>
  );
}
