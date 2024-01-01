import React from "react";
import "./projects.css";
import Image1 from "./bgspacex5.jpg";
import Image2 from "./savoy6.jpg";
import Image3 from "./resume.jpg";
import Image4 from "./student.jpg";



function Projects() {
  
    
    return (
        <>
        <div id="totaldiv1">
        <div id="fourthdiv">
            <div class="card" style={{ width: "18rem" }}>
                <img src={Image1} class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">SpaceX</h5>
                    <p class="card-text">SpaceX Clone Website using HTML, CSS, Bootstrap </p>
                    <a href="https://space-x-lemon-xi.vercel.app/" class="btn btn-primary">View Project</a>
                </div>
            </div>
            </div>
            
            <div id="fifthdiv">
            <div class="card" style={{ width: "18rem" }}>
                <img src={Image2} class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">SAVOY</h5>
                    <p class="card-text">Savoy E-commerce Website using HTML, CSS</p>
                    <a href="https://savoy-e-commerce.vercel.app/" class="btn btn-primary">View Project</a>
                </div>
            </div>
            </div>

            <div id="sixthdiv">
            <div class="card" style={{ width: "18rem" }}>
                <img src={Image3} class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">RESUME</h5>
                    <p class="card-text">Resume Building Website using HTML, CSS</p>
                    <a href="https://vibinkumar-resume.vercel.app/" class="btn btn-primary">View Project</a>
                </div>
            </div>
            </div>

            <div id="seventhdiv">
            <div class="card" style={{ width: "18rem" }}>
                <img src={Image4} class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">Registration Form</h5>
                    <p class="card-text">Student Registration Form using HTML, CSS, JavaScript</p>
                    <a href="https://student-registration-form-lake.vercel.app/" class="btn btn-primary">View Project</a>
                </div>
            </div>
            </div>
            </div>
                </>
                )
    
}

                export default Projects