import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbarr from './Navbar';
function About() {
    return (
        <div>
            <Navbarr></Navbarr>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='text-primary fw-bold'>About Us</h1>
                        <p className='lead mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, explicabo.
                            Sunt animi laboriosam quam beatae neque obcaecati nostrum rem. Temporibus fuga
                            perferendis saepe hic dolore ratione enim suscipit labore minus? Lorem ipsum dolor
                             sit amet, consectetur adipisicing elit. Itaque repudiandae minus incidunt quae vero
                              explicabo debitis tempore nulla voluptatibus, modi rerum necessitatibus minima sapiente 
                              facere aut similique, ab ipsa reiciendis.</p>
                             < NavLink to="/contact" className="btn btn-outline-primary px-3"> Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/about.webp" alt="About" height={350} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;