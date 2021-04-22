import { useRouter } from "next/router";
import SideBar from "../../components/Sidebar/SideBar";
import Details from "../../components/UI/Details/Details";
import Gallery from "../../components/UI/Gallery/Gallery";
import { getProjectById } from "../../projects-data";

export default function ProjectDetailPage() {
  const router = useRouter();
  const projectId = router.query.projectId;

  const project = getProjectById(projectId);

  if (!project) {
    return <p>No Event Found!</p>;
  }

  return (
    <div className="container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="main">
        <div
          className={
            project.category == "Design" && project.projectImages.length < 2
              ? "single-project"
              : "project"
          }
        >
          <Gallery images={project.projectImages} />
          <Details
            name={project.name}
            category={project.category}
            desc={project.desc}
            dateCreated={project.dateCreated}
            url={project.url}
          />
        </div>
      </div>
    </div>
  );
}
