import React from 'react';


function Contact() {
  return (
    <div>
     <div className="container">
       <h1>Contact Me</h1>
       <p>
         <a href="mailto:johnoh@usc.edu">
           <i className="fas fa-envelope icon"> johnoh@usc.edu</i>
          </a>
       </p>

       <p>
         <a href="https://www.linkedin.com/in/john-oh-2ab104215/" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-linkedin icon"> LinkedIn</i>
         </a>
       </p>

       <p>
         <a href="https://github.com/therealohzone" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-github icon"> GitHub</i>
         </a>
       </p>
     </div>
    </div>
    
  );  
}

export default Contact;