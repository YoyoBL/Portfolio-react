import Project from "./project";

const Projects = ({ projectsList = {} }) => {
   return (
      <section
         id="projects"
         style={{ minHeight: "100vh", backgroundColor: "#1e3c52" }}
      >
         <div className="container ">
            <div className="row">
               <h2 className="text-center text-white mt-3">Projects</h2>
            </div>
            <div className="row g-5 p-5">
               {projectsList.map((project, index) => (
                  <Project key={index} project={project} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Projects;
