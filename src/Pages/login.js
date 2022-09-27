import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { Default } from "react-toastify/dist/utils";

const Login = () => {
 const history=useNavigate()

  const [inputVal, setinputVal] = useState({
    email: "",
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

    const getuserArr = localStorage.getItem("user");
    console.log(getuserArr);

    const { email, password } = inputVal;
    if (email === "") {
      toast.error("email field is required", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email address", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is required", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el) => {
         
          return el.email === email && el.password === password;
        
        });
       
        if (userlogin.length === 0) {
          alert("Please enter valid Details..");
        }
         else {
          console.log("user login Successfully");

          localStorage.setItem("login", JSON.stringify(userlogin));

          history("/home");
        }
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto ">
          <div className="card border-0 shadow rounded-3 my-5 mt-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">
                Login
              </h5>
              <form>
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
                    Login
                  </button>
                </div>
                <hr className="my-4"></hr>
                <p className="forgot-password text-right">
                  Not Registered Yet? <NavLink to="/signin">SignIn</NavLink>
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

export default Login;
