import React from 'react';
import '../../App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import StepIndicator from '../StepIndicator';


const Signup = () => {
  return(
    <div className='signup'>
      <div className='mainContainer'>
        <StepIndicator />
        <div className='output'>
          <Route exact path='/signup/step1'>
            First step
            <div className="btnContainer">
              <Link to='/signup/step2'>Next</Link>
            </div>
          </Route>
          <Route exact path='/signup/step2'>
            Second step
            <div className="btnContainer">
              <Link to='/signup/step1'>Back</Link>
              <Link to='/signup/step3'>Next</Link>
              </div>
          </Route>
          <Route exact path='/signup/step3'>
            Third step
            <div className="btnContainer">
              <Link to='/signup/step2'>Back</Link>
              </div>
          </Route>

        </div>
      </div>
    </div>
  );
};

export default Signup

