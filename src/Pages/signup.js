import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const history = useNavigate();

  const [inputVal, setinputVal] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });


  const getdata = (e) => {
    const { value, name } = e.target;

    setinputVal(() => {
      return {
        ...inputVal,
        [name]: value,
      };
    });
  };

  const saveData = (e) => {
    e.preventDefault();

    const { name, email, date, password } = inputVal;

    if (name === "") {
      toast.error(" name field is requred!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (date === "") {
      toast.error("date field is requred", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      console.log("data added successfully");
      history("/");
      localStorage.setItem("user", JSON.stringify([inputVal]));
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto ">
          <div className="card border-0 shadow rounded-3 my-5 mt-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">
                Sign In
              </h5>
              <form>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="floatingText"
                    onChange={getdata}
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={getdata}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    id="floatingDate"
                    onChange={getdata}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={getdata}
                  />
                </div>

                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-login text-uppercase fw-bold"
                    type="submit"
                    onClick={saveData}
                  >
                    Sign in
                  </button>
                </div>
                <hr className="my-4"></hr>
                <p className="forgot-password text-right">
                  Already Have an Account{" "}
                  <span>
                    <NavLink to="/">Login</NavLink>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Signup;
