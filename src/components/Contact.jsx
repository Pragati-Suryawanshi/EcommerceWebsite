import React from "react";
import Footer from "./Footer";
import Navbarr from "./Navbar";
const Contact = () => {
  return (
    <div>
        <Navbarr></Navbarr>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className=" col-md 5 d-flex justify-content-center">
            <img
              src="/assets/contact.jfif"
              alt="Contact Us"
              height="400px"
              width="350px"
            />
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="examplefornControlInput " class="form-label">
                Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="Enter Your Name here"
                ></input>
              </div>

              <div class="mb-3">
                <label for="examplefornControlInput " class="form-label">
                  Email 
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                ></input>
              </div>
              <div class="mb-3">
                <label for="exampleFornControlTextareal" class="form-label">
                 Your Comments
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextareal"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    <Footer></Footer>

    </div>
  );
};
export default Contact;
