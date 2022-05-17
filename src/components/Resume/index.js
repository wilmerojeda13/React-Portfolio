import React from "react";

function myResume () {
    return (
		<>
        <div className="resume" id="resume">
          <div className="education">
            <h2>Resume</h2>

            <a
              href={require('../../assets/files/My resume.pdf')}
              download="Resume"
              target="_blank"
              rel="noopener  noreferrer"
            >
              Download My Resume
            </a>

            <div className="degrees">
              <br></br>
              <p className="school-name">
                Full Stack Web Developer Graduation 
                <span>&bull;</span><em className="date">June 3</em>
              </p>
              <p className="school-name">
                University Of Miami Bootcamp
                <span>&bull;</span>(dec 2021-to june 3-2022) <em className="date"></em>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }


export default myResume;