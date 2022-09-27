import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute1(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    
    if (login) {
      navigate("/home");
    }
  });

  return(
    <div>
        <Component></Component>
    </div>
  )
}

export default ProtectedRoute1;



