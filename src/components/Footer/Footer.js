import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className=''>
      <footer className='row m-1 mb-0 text-bg-dark p-4 '>
        <div className=' col-lg-4' >
          <h3 className='fw-lighter'>About Us</h3> <br/>
          <p>  Dhakad Technosoft Private Limited is an established software development company delivering software development services of any complexity to clients worldwide.Being in IT business, Dhakad Technosoftm has a strong team with great expertise. Our customers are companies of all sizes ranging from startups to large enterprises who realize that they need a professional internet solution to generate revenue streams, establish communication channels or streamline business operations.
          </p>
        </div>
        <div className='col-lg-4'>
          <h3 className=' fw-lighter'> Pages</h3>  <br/>
          <div class=" justify-content-end  " id="navbarNav">
            <ul class="navbar-nav fs-6 ">
              <li className='nav-item '>
                <Link class="nav-link mx-3 " id='ho' to="/"> <span className='text-light'>></span> Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link mx-3 " id='ab' to="/About">  <span className='text-light'>></span> About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link mx-3 " id='re' to="/Register"> <span className='text-light'>></span> Registeration</Link>
              </li>
              <li className='nav-item'>
                <Link class="nav-link mx-3 "id='lo'  to="/Login"> <span className='text-light'>></span> Login</Link>
              </li>
              <li className='nav-item'>
                <Link class="nav-link mx-3 " id='se' to="/Servises"> <span className='text-light'>></span> Servises</Link>
              </li>
              {/* <li class="nav-item">
                                <Link class="nav-link " aria-disabled="true" to="/">Disabled</Link>
                </li> */}
            </ul>
          </div>
        </div>
        <div className='col-lg-4 '>
          <h3 className='fw-lighter'>Contects</h3>  <br/>
          <h6>F-15, Second Floor , Vastsalya Chambers , Opposite INOX Cinema Sapna Sangeeta Road 452001 Indore, India</h6> <br/>
          <h6>+91-9619880529</h6> <br/>  
          <h6>info@dhakadsoft.com</h6>
        </div>
      </footer>
      <footer className='m-1 mt-0'>
        <nav class="navbar navbar-expand-lg text-bg-secondary shadow  ">
          <div class="container-fluid m-3 mt-0 mb-0  ">
            <h6>© 2017 Dhakad Technosoft Private Limited</h6>
            {/* <img src='	https://dhakadsoft.com/wp-content/uploads/2017/10/Dhakad-Technosoft-Logo-22-1-1-1024x1024.png' alt='logo' width='110' height='110' /> */}
            {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
            <div class=" justify-content-end " id="navbarNav">
              <ul class="navbar-nav fs-6 ">
                <li className='nav-item '>
                  <Link class="nav-link mx-3 text-white" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link mx-3 text-white" to="/About">About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link mx-3 text-white" to="/Register">Registeration</Link>
                </li>
                <li className='nav-item'>
                  <Link class="nav-link mx-3 text-white" to="/Login">Login</Link>
                </li>
                <li className='nav-item'>
                  <Link class="nav-link mx-3 text-white" to="/Servises">Servises</Link>
                </li>
                {/* <li class="nav-item">
                                <Link class="nav-link " aria-disabled="true" to="/">Disabled</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>

      </footer>

    </div>
  )
}

export default Footer
