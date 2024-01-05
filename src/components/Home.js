import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Home</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to="/About">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Register">Registeration</Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link class="nav-link " aria-disabled="true" to="/">Disabled</Link>
                            </li> */}
                        </ul>
                    </div>
                    <button className='btn btn-primary'><Link class="nav-link" to="/Login">Login</Link></button>
                </div>
            </nav>

        </div>
    )
}

export default Home;
