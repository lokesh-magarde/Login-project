import React from 'react';
import { BrowserRouter , Route, Routes, } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './components/About';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Home from './components/Home';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />}  />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/About" element={<About />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
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
