import { Link } from "react-router-dom";
import "../styles/general.css";
import Technologies from "./technologies";

const ProjectPage = ({ project }) => {
   const liveProduction = project.linkAddress.startsWith("https://")
      ? project.linkAddress
      : `https://yoyobl.github.io/${project.linkAddress}`;
   const githubLink = project.githubRepository
      ? `https://github.com/YoyoBL/${project.githubRepository}`
      : `https://github.com/YoyoBL/${project.linkAddress}`;
   const downloadLink = project.githubRepository
      ? `https://github.com/YoyoBL/${project.githubRepository}/archive/refs/heads/master.zip`
      : `https://github.com/YoyoBL/${project.linkAddress}/archive/refs/heads/master.zip`;
   console.log(githubLink);
   return (
      <div
         className="d-flex flex-column overflow-hidden"
         style={{ minHeight: "100vh" }}
      >
         <header className="sticky-top">
            <nav
               className="navbar border-bottom border-bottom-dark bg-black bg-opacity-25"
               data-bs-theme="dark"
            >
               <div className="container">
                  <Link to="/" className="navbar-brand">
                     #Yoel Bar-Lev | Full-stack developer
                  </Link>
               </div>
            </nav>
         </header>
         <main className="flex-fill d-flex flex-column">
            <div className="row text-center text-white center-all bg-black bg-opacity-25">
               <h1>{project.title}</h1>
               <p>{project.details}</p>
               <div className="d-flex flex-nowrap justify-content-center align-items-stretch gap-2">
                  <Link
                     to={liveProduction}
                     className="btn btn-outline-light "
                     target="_blank"
                  >
                     Visit project
                  </Link>
                  <Link to={downloadLink} className="btn btn-outline-light ">
                     Download project
                  </Link>
                  <Link
                     to={githubLink}
                     className="btn btn-outline-light"
                     target="_blank"
                  >
                     Github
                  </Link>
               </div>
            </div>
            <div
               className="row line-frames shadow-lg overflow-hidden"
               style={{ paddingBlock: "20px" }}
            >
               <Technologies
                  height={"60px"}
                  carousel={true}
                  technologies={project.technologies}
               />
            </div>

            <div className="flex-fill center-all p-3">
               <div className="frames">
                  <img
                     src={`./images/Sites_thumbnails/${project.title}.png`}
                     alt="project screenshot"
                     className="img-fluid rounded-5"
                     style={{ maxHeight: "500px" }}
                  />
               </div>
            </div>
         </main>
      </div>
   );
};

export default ProjectPage;
