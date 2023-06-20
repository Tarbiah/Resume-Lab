import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
       <div className="container">
          <div className="nav">
            <div className="logo">RESUME LAB</div>
            <ul className="nav-menu">
              <li className="nav-item">HOME</li>
              <li className="nav-item">ABOUT US</li>
              <li className="nav-item">CONTACT US</li>
            </ul>
            <div className="navBtns">
              <Link to="/signup" className="nav-button" >
                Sign Up
              </Link>
              <Link to="/login" className="nav-button">Log In</Link>
            </div>
          </div>
          <div className="hero">
            <div className="wrapper">
              <h1>GRAB</h1>
              <h1>YOUR DREAM JOB</h1>
              <h1 className="text-outline">BY A RESUME THAT STANDS </h1>
              <h1 class="text-outline">OUT!</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, facere corrupti. Ducimus id magnam
                suscipit esse eum ipsam cupiditate, laudantium quisquam accusantium praesentium, quidem nesciunt voluptatum
                repellat perspiciatis provident animi sequi dolorum ut, nihil eaque totam repellendus labore officia? Optio
                id, accusamus temporibus impedit possimus velit itaque libero dicta saepe. Est et repellat mollitia modi a
                ad eveniet tenetur
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
