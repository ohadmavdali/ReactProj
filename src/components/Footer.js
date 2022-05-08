import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div className='footer-container'>
      <Link to="/signup/step2" className="btn btn-primary">Next</Link>
    </div>
  );
}

export default Footer;