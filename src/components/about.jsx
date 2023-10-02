import "../styles/about.css";
import "../styles/general.css";
import Technologies from "./technologies";

const About = () => {
   return (
      <div className="container">
         <section
            id="about"
            className="d-flex flex-column justify-content-center align-content-even mt-3 min-vh-100"
         >
            <div className=" row row-cols-1 row-cols-md-2 p-4 ">
               <div className="col order-md-2 ">
                  <div className="center-all frames h-100 ">
                     <img
                        src="./images/portfolio_img.jpg"
                        className="img-fluid object-fit-cover h-100 rounded-5"
                        alt=""
                     />
                  </div>
               </div>
               <div className="col text-center text-white p-4 frames h-100 ">
                  <h1>About me</h1>
                  <p className="mt-5 px-lg-5 ">
                     HI! I'm Yoel Bar-Lev, a dedicated full-stack developer with
                     a background in the art world, specializing in web
                     development. <br />
                     With a creative mindset, I bring a unique perspective to
                     coding, combining artistic flair with technical expertise.
                     I strive to create visually appealing and user-friendly
                     websites that seamlessly blend aesthetics with
                     functionality. <br />
                     Continual learning keeps me updated on industry trends,
                     ensuring modern, responsive, and high-performing websites.
                     <br />
                     <br />
                     Let's Create together!
                  </p>
               </div>
            </div>
            <Technologies height={"100px"} />
         </section>
      </div>
   );
};

export default About;
