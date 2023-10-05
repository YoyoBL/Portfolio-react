import Project from "./project";

const Projects = ({ projectsList = {} }) => {
   return (
      <section
         id="projects"
         style={{ minHeight: "100vh", backgroundColor: "#1e3c52" }}
      >
         <div className="container ">
            <div className="row py-3">
               <h2 className="text-center text-white ">Projects</h2>
            </div>
            <div className="row g-5 px-5 ">
               {projectsList.map((project, index) => (
                  <Project key={index} project={project} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Projects;
