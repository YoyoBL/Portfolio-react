import classNames from "classnames";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
   const [navLink, setNavLink] = useState("home");
   return (
      <nav
         className="navbar navbar-expand-lg border-bottom border-bottom-dark bg-black bg-opacity-25"
         data-bs-theme="dark"
      >
         <div className="container">
            <span className="navbar-brand">
               #Yoel Bar-Lev | Full-stack developer
            </span>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNav"
               aria-controls="navbarNav"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div
               className="collapse navbar-collapse justify-content-end"
               id="navbarNav"
            >
               <ul className="navbar-nav">
                  <li onClick={() => setNavLink("home")} className="nav-item">
                     <Link
                        to="#home-screen"
                        className={classNames("nav-link", {
                           active: navLink === "home",
                        })}
                     >
                        Home
                     </Link>
                  </li>
                  <li onClick={() => setNavLink("about")} className="nav-item">
                     <Link
                        className={classNames("nav-link", {
                           active: navLink === "about",
                        })}
                        to="#about"
                     >
                        About me
                     </Link>
                  </li>
                  <li
                     onClick={() => setNavLink("projects")}
                     className="nav-item"
                  >
                     <Link
                        className={classNames("nav-link", {
                           active: navLink === "projects",
                        })}
                        to="#projects"
                     >
                        Projects
                     </Link>
                  </li>
                  <li
                     onClick={() => setNavLink("contact")}
                     className="nav-item"
                  >
                     <Link
                        className={classNames("nav-link", {
                           active: navLink === "contact",
                        })}
                        to="#contact"
                     >
                        Contact
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
