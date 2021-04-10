import { useRouter } from "next/router";
import { getProjectById } from "../../projects-data";

export default function ProjectDetailPage() {
  const router = useRouter();
  const projectId = router.query.projectId;

  const project = getProjectById(projectId);
  console.log(project, "project");

  if (!project) {
    return <p>No Event Found!</p>;
  }

  return (
    <div>
      <h1>{project.name} </h1>
      <p>{project.desc}</p>
    </div>
  );
}
