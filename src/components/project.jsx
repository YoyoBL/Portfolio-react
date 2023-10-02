import { Link } from "react-router-dom";

const Project = ({ project = {} }) => {
   return (
      <div className="col-12 col-lg-4 center-all ">
         <div className="card h-100 justify-content-between">
            <Link
               className="text-black text-decoration-none"
               to={project.title}
            >
               <img
                  src={[
                     "./images/Sites_thumbnails/",
                     project.title,
                     ".png",
                  ].join("")}
                  className="card-img-top"
                  alt={project.title}
               />
               <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
               </div>
            </Link>
            <div className="list-group list-group-flush">
               <a
                  href={["https://github.com/YoyoBL/", project.gitHubLink].join(
                     ""
                  )}
                  className="list-group-item list-group-item-action"
               >
                  <i className="bi bi-github"></i> Git Link
               </a>
            </div>
         </div>
      </div>
   );
};

export default Project;
