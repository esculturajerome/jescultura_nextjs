import ProjectList from "../components/projects/ProjectList";
import SideBar from "../components/Sidebar/SideBar";
import { getAllProjects } from "../projects-data";

export default function HomePage() {
  const AllProjects = getAllProjects();

  return (
    <div className="container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="main">
        <ProjectList items={AllProjects} />
      </div>
    </div>
  );
}
