import { Link, useNavigate } from "react-router-dom";
import "../styles/general.css";
import Technologies from "./technologies";

const ProjectPage = ({ project }) => {
   const navigate = useNavigate();

   const handleGoBack = () => {
      navigate(-1);
   };

   const liveProduction = project.linkAddress.startsWith("https://")
      ? project.linkAddress
      : `https://yoyobl.github.io/${project.linkAddress}`;
   const githubLink = project.githubRepository
      ? `https://github.com/YoyoBL/${project.githubRepository}`
      : `https://github.com/YoyoBL/${project.linkAddress}`;
   const downloadLink = project.githubRepository
      ? `https://github.com/YoyoBL/${project.githubRepository}/archive/refs/heads/master.zip`
      : `https://github.com/YoyoBL/${project.linkAddress}/archive/refs/heads/master.zip`;
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
                  <div
                     onClick={handleGoBack}
                     className="text-white d-flex align-items-center gap-2 fs-5"
                     style={{ cursor: "pointer" }}
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        class="bi bi-chevron-left"
                        viewBox="0 0 16 16"
                     >
                        <path
                           fill-rule="evenodd"
                           d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                        />
                     </svg>
                     <span>Back</span>
                  </div>
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
                  <Link
                     to={githubLink}
                     className="btn btn-outline-light"
                     target="_blank"
                  >
                     Github
                  </Link>
                  <Link to={downloadLink} className="btn btn-outline-light ">
                     Download project
                  </Link>
               </div>
            </div>
            <div
               className="row line-frames shadow-lg overflow-hidden"
               style={{ paddingBlock: "20px" }}
            >
               <Technologies
                  height={"30px"}
                  carousel={false}
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
