import { Link } from "react-router-dom";
import "../styles/general.css";
import Technologies from "./technologies";

const ProjectPage = ({ project }) => {
   return (
      <>
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
         <main>
            <div className="container-fluid d-flex flex-column min-vh-100">
               <div className="row flex-fill text-center text-white center-all bg-black bg-opacity-25  ">
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                  <div className="d-flex flex-nowrap justify-content-center align-items-stretch gap-2">
                     <Link
                        to={`https://yoyobl.github.io/${project.linkAddress}`}
                        className="btn btn-outline-light "
                        target="_blank"
                     >
                        Go to project
                     </Link>
                     <Link
                        to={`https://github.com/YoyoBL/${project.linkAddress}/archive/refs/heads/master.zip`}
                        className="btn btn-outline-light "
                     >
                        Download project
                     </Link>
                     <Link
                        to={`https://github.com/YoyoBL/${project.linkAddress}`}
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
                     height={"30px"}
                     carousel={false}
                     Technologies={["html-5", "css-3", "sass", "bootstrap"]}
                  />
               </div>
               <div className="row flex-fill">
                  <div className="col-11 col-md-7 m-auto frames">
                     <img
                        src={`./images/Sites_thumbnails/${project.title}.png`}
                        alt="project screenshot"
                        className="img-fluid rounded-5"
                     />
                  </div>
               </div>
            </div>
         </main>
      </>
   );
};

export default ProjectPage;
