import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css";


const Home = () => {
    return (
        <div className=' mt-5 pt-5'>
            <div className=' mt-4 pt-4'>
                <header className=' bg-white' Style="position:fixed; width:100%;  top:0;  z-100; ">
                    <nav class="navbar navbar-expand-lg bg-body-white border-bottom shadow ">
                        <div class="container-fluid m-3 mt-0 mb-0">
                            <img src='	https://dhakadsoft.com/wp-content/uploads/2017/10/Dhakad-Technosoft-Logo-22-1-1-1024x1024.png' alt='logo' width='110' height='110' />
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul class="navbar-nav fs-5 " id='col'>
                                    <li className='nav-item'>
                                        <Link class="nav-link mx-3 " id='home' to="/">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link mx-3 " id='About' to="/About">About</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link mx-3 " id='register' to="/Register">Registeration</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link class="nav-link mx-3 " id='servises' to="/Servises">
                                            <div class="dropdown">
                                                <span class="dropbtn">Servises</span>
                                                <div class="dropdown-content mt-5 ">
                                                    <a href="#">Link 1</a>
                                                    <a href="#">Link 2</a>
                                                    <a href="#">Link 3</a>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link class="nav-link mx-3 " id='login' to="/Login">Login</Link>
                                    </li>
                                    {/* <li class="nav-item">
                                <Link class="nav-link " aria-disabled="true" to="/">Disabled</Link>
                            </li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

        </div>

    )
}

export default Home;
