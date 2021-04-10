import { useRouter } from "next/router";
import { getProjectByCategory } from "../../projects-data";

export default function ProjectDetailPage() {
  const router = useRouter();
  const projectCategory = router.query.category;

  const projects = getProjectByCategory(projectCategory);

  if (!projects) {
    return <p>No Event Found!</p>;
  }

  return (
    <div>
      {projects.map((project) => (
        <h1 key={project.id}>{project.name}</h1>
      ))}
    </div>
  );
}
