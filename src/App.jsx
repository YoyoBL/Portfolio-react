import "./App.css";
import Layout from "./components/layout";
import ProjectPage from "./components/projectPage";
import { Routes, Route } from "react-router-dom";
import { projectsList } from "./projectsList";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Layout projectsList={projectsList} />} />
            {projectsList.map((project, index) => (
               <Route
                  key={index}
                  path={project.title}
                  element={<ProjectPage project={project} />}
               />
            ))}
         </Routes>
      </div>
   );
}

export default App;
