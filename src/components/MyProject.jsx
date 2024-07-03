import Project from "./Project";
import { RxBorderSolid } from "react-icons/rx";
import { useLoaderData } from "react-router-dom";

const MyProject = () => {
  const projects = useLoaderData();
  return (
    <div>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="flex mb-10"
      >
        <h1 className="text-3xl">My Project</h1>
        <RxBorderSolid className="text-[#3ad8e4] text-6xl font-mono" />
      </div>
    <div className="grid grid-cols-3 gap-8">
      {
      projects.map(project => (<Project key={project.id} project={project}></Project>))
      }
    </div>
    </div>
  );
};

export default MyProject;
