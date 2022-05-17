import React from "react";

function myResume () {
    return (
		<>
        <div className="resume" id="resume">
          <div className="education">
            <h2>Resume</h2>

            <a
              href=''
              download="Resume"
              target="_blank"
              rel="noopener  noreferrer"
            >
              Download My Resume
            </a>

            <div className="degrees">
              <p className="school-name">
                Full Stack Web Developer Graduation 
                <span>&bull;</span> <em className="date">June 3</em>
              </p>
              <p className="school-name">
        
                <span>&bull;</span> <em className="date"></em>
              </p>
              <p className="school-name">
              
                <span>&bull;</span> <em className="date"></em>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }


export default myResume;