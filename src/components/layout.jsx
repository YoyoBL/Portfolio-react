import NavBar from "./navBar";
import About from "./about";
import Home from "./home";
import Projects from "./projects";
import Contact from "./contact";

const Layout = ({ projectsList }) => {
   return (
      <>
         <header className="sticky-top">
            <NavBar />
         </header>
         <main>
            <Home />
            <About />
            <Projects projectsList={projectsList} />
            <Contact />
         </main>
         <footer>Footer</footer>
      </>
   );
};

export default Layout;
