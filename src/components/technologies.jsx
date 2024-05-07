import "../styles/technologies.css";

const Technologies = ({
   height,
   carousel = true,
   technologies = [
      "html-5",
      "css-3",
      "sass",
      "bootstrap",
      "javascript",
      "typescript",
      "react",
      "nextjs",
      "tailwind",
      "axios",
      "nodejs",
      "mongoose",
      "express",
      "bcrypt",
      "jsonwebtoken",
      "react-router",
      "github",
      "formik",
      "vscode",
   ],
}) => {
   if (window.matchMedia("(max-width: 768px)").matches && carousel) {
      height = height.replace("px", "");
      height = Number(height) / 2;
      height = [String(height), "px"].join("");
   }
   const generateLogos = (key) => {
      return (
         <div key={key} className={carousel && "slide"}>
            {technologies.map((logo, index) => (
               <div key={logo} className="logos-slide">
                  <div className="mx-3 flex">
                     <img
                        className="mx-auto"
                        key={index}
                        src={`./images/Icons/${logo}-svgrepo-com.svg`}
                        alt={logo}
                        style={{ height: height }}
                     />
                     <div className="text-white-50 text-capitalize small mt-2">
                        {!carousel && logo}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      );
   };
   return (
      <div className="row mt-3 position-relative z-3">
         <div className="text-center text-white">
            <h4>Technologies</h4>
         </div>
         <div className="logos text-center">
            {generateLogos(0)}
            {carousel && [generateLogos(1), generateLogos(2)]}
         </div>
      </div>
   );
};

export default Technologies;
