import { Link } from "react-router-dom";
import "../styles/project.css";

const Project = ({ project = {} }) => {
   return (
      <div className="col-12 col-lg-4  ">
         <div className="hover h-100">
            <div className="frame h-100">
               <div className="card h-100 text-center ">
                  <Link className="text-decoration-none" to={project.title}>
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
               </div>
            </div>
         </div>
      </div>
   );
};

export default Project;
