import { useRouter } from "next/router";
import SideBar from "../../components/Sidebar/SideBar";
import ProjectList from "../../components/projects/ProjectList";
import { getProjectByCategory } from "../../projects-data";

export default function ProjectDetailPage() {
  const router = useRouter();
  const projectCategory = router.query.category;

  const projects = getProjectByCategory(projectCategory);

  if (!projects) {
    return <p>No Event Found!</p>;
  }

  return (
    <div className="container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="main">
        <ProjectList items={projects} />
      </div>
    </div>
  );
}
