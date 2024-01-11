import React from 'react';
import { BrowserRouter , Route, Routes, } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './components/About/About';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';
import Home from './components/Home/Home';
import Footer  from './components/Footer/Footer';
import Servises from './components/servis/Servises';



export default function App() {
  return (
   <>
    <BrowserRouter>
    <Home/>
      <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Servises" element={<Servises />} />
        {/* </Route> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
   </>
  );
}



// function App() {
//   return (

//     <>

//       {/* <LoginPage></LoginPage>
//     <RegisterPage></RegisterPage>
//     <Home></Home> */}


//       <BrowserRouter>
       
//       </BrowserRouter>
//     </>
//   );

// }


// export default App;
