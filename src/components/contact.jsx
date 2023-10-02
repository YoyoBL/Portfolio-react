import { useState } from "react";
import Input from "./common/input";

const Contact = () => {
   const initialValue = {
      name: "",
      mail: "",
      phone: "",
      message: "",
   };
   const [inputs, setInputs] = useState(initialValue);
   const handleChange = (e) => {
      setInputs((inputs) => ({
         ...inputs,
         [e.target.name]: e.target.value,
      }));
   };
   return (
      <section id="contact" className="d-flex flex-column min-vh-100">
         <div className="flex-grow-1 d-flex align-items-center">
            <div className="container">
               <form
                  className="form text-center text-white"
                  action="https://formspree.io/f/mrgwgnwk"
                  method="POST"
                  onSubmit={() => setInputs({ ...initialValue })}
               >
                  <fieldset>
                     {/* <!-- Form Name --> */}
                     <legend className="h2 mb-3">Contact Me</legend>

                     {/* <!-- Text input--> */}
                     <div className="form-group mt-3">
                        <div className="col-md-4 mx-auto">
                           <Input
                              name="name"
                              value={inputs.name}
                              onChange={handleChange}
                              type="text"
                              required
                           />
                        </div>
                     </div>

                     {/* <!-- Text input--> */}
                     <div className="form-group mt-3">
                        <div className="col-md-4 mx-auto">
                           <Input
                              name="mail"
                              value={inputs.mail}
                              onChange={handleChange}
                              type="email"
                              required
                           />
                        </div>
                     </div>

                     {/* <!-- Text input--> */}
                     <div className="form-group mt-3">
                        <div className="col-md-4 mx-auto">
                           <Input
                              name="phone"
                              value={inputs.phone}
                              onChange={handleChange}
                              type="tel"
                              required
                           />
                        </div>
                     </div>

                     {/* <!-- Textarea --> */}
                     <div className="form-group mt-3">
                        <div className="col-md-4 mx-auto">
                           <textarea
                              value={inputs.message}
                              onChange={(e) =>
                                 setInputs((inputs) => ({
                                    ...inputs,
                                    message: e.target.value,
                                 }))
                              }
                              placeholder="Message"
                              className="form-control"
                              id="textarea"
                              name="Message"
                              required
                           ></textarea>
                        </div>
                     </div>

                     {/* <!-- Button --> */}
                     <div className="form-group mt-3">
                        <div className="col-md-4 mx-auto">
                           <button className="btn btn-outline-light">
                              Send
                           </button>
                        </div>
                     </div>
                  </fieldset>
               </form>
            </div>
         </div>
      </section>
   );
};

export default Contact;
