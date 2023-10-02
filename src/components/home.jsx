import "../styles/main_animation.css";

const Home = () => {
   return (
      <div id="home-screen">
         <div className="row">
            {/* <!-- animated BG --> */}
            <div className="animation px-0">
               <div className="animated-bg">
                  <div className="light x1"></div>
                  <div className="light x2"></div>
                  <div className="light x3"></div>
                  <div className="light x4"></div>
                  <div className="light x5"></div>
                  <div className="light x6"></div>
                  <div className="light x7"></div>
                  <div className="light x8"></div>
                  <div className="light x9"></div>
               </div>
            </div>
         </div>
         {/* <!-- entry text --> */}
         <div className="text-center center-all entry-text">
            <div>
               <div className="text-white ">
                  <h4 className="">Hello</h4>
                  <h1 className="">I'm Yoel Bar-Lev</h1>
                  <h5 className="">Full-Stack developer</h5>
                  <a href="#projects">
                     <button className="mt-3">My Projects</button>
                  </a>
               </div>
               {/* <!-- quote --> */}
               <div className="quote mt-5">
                  <h1>
                     <span>"Code </span>
                     <span> is</span>
                     <span>the</span>
                     <span>brush,</span>
                     <span>design</span>
                     <span>is</span>
                     <span>the</span>
                     <span>palette,</span>
                     <span>together</span>
                     <span>they</span>
                     <span>create</span>
                     <span>digital</span>
                     <span>masterpieces."</span>
                  </h1>
                  {/* <!--Brian Tracy--> */}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
