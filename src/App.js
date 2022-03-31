import Navbar from './components/Navbar';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/products' element={<Products/>}/>
          <Route exact path='/services' element={<Services/>}/>
          <Route exact path='/sign-up' element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
