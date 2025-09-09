import React from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../Components/404.css';
export default function ERROR() {
  return (
      <>
      
    
    <section id='ERRORS'> 
    <div className='container'></div>
    <div  className='row'></div>
    <div  className='col-lg-12 col-md-12 col-sm-12 col-12'>
      <center>
  <h3>Oops! Page Not Found </h3>
  <p>The page you’re looking for doesn’t exist.</p>
   <a href="https://servicee2e.in/">Go to Home</a>
   
  
  </center>
</div>
</section>




</>    
)
}



