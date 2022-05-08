
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Signup from './components/pages/Signup';
import Form from './components/Form';
import PetInfo from './components/PetInfo';
import Footer from './components/Footer';
import StepIndicator from './components/StepIndicator';



const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <StepIndicator />
        <Form />
        <PetInfo />
        <Footer />
        <Routes>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/signup:step' component={Signup} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
