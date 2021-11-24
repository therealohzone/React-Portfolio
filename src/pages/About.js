import React from 'react';
import { Link } from 'react-router-dom';



function About() {
  return (
    <div>
      <div className="container">
       
        
        <div className="row mb-5">
          <h1>Hi! I'm John, Nice to Meet You!</h1>
        </div>

       
        <div className="row">
          
         
          <div className="col-lg-6">

        

            <p>Contact Me:</p>
            <div className="row">
              <a href="https://github.com/therealohzone" target="_blank" rel="noopener noreferrer"><i className="fab fa-github icon"></i></a>
              <a href="hhttps://www.linkedin.com/in/john-oh-2ab104215/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin icon"></i></a>
              <a href="mailto:gscalica@gmail.com"><i className="fas fa-envelope icon"></i></a>
            </div>
            
          </div>

         
          <div className="col-lg-6">
            <p className="aboutText">
              I am a Full Stack Developer based in Atlanta, GA with a Bachelor's in Biological Sciences from the University of Southern California. While working as a Lab Technician, I helped create a website for a friend and realized that this was a career that I'd wish to pursue. 
            </p>
      
            <p className="aboutText">
              With this in mind, I enrolled in Georgia Tech's Full Time Coding Bootcamp to equip myself with the knowledge to pursue this dream.  I now have experience and am proficient with the MERN stack (MongoDB, Express.js, React.js, and Node.js).
            </p>

            <p className="aboutText">
              Some hobbies that I enjoy when I am not coding or learning is Fly Fishing, playing my guitar, and photagraphy.
            </p>


            <p className="aboutText">
            The Technologies I am experienced in:
              <ul>
                <li>HTML 5 & CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>MERN (MongoDB, Express, React, Node)</li>
              </ul>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;
