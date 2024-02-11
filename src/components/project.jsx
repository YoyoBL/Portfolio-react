import { Link } from "react-router-dom";
import "../styles/project.css";

const Project = ({ project = {}, featured = false }) => {
   return (
      <div className="col-12 col-lg-4">
         <div className="hover h-100 position-relative">
            {
               /* Featured */

               featured && (
                  <span class="badge rounded-circle p-2 border border-2 border-warning bg-black position-absolute top-0 start-100 z-3 translate-middle">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-star-fill text-warning fs-2"
                        viewBox="0 0 16 16"
                     >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                     </svg>
                  </span>
               )
            }
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
