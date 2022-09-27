import React from "react";

function Footer() {
  return (
    <div>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-4 my-4 border-top  bg-light navbar-light bg-white  shadow-lg fixed">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
      
          </a>
          <span className="fw-bolder lead">&copy; LA COLLECTIONS</span>  &nbsp;<span class="mb-3 mb-md-0 text-muted">   2022 Company, Inc</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-primary fs-5" href="#">
            <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li class="ms-3">
            <a class="text-info fs-5" href="#">
            <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li class="ms-3">
            <a class="text-danger fs-5" href="#">
            <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
