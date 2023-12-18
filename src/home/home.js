import React from "react";
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import Image1 from "./myimage1.png";
import Image2 from "./in.jpg";
import Image3 from "./face2.jpg";
import Image4 from "./twi1.jpg";
import Image5 from "./insta1.jpg";
import "./home.css";
import About from "./about";



function Home() {

    function myClick() {
        document.getElementById("hi").style.display = "none";
    }

    function myClick1() {
        document.getElementById("hi").style.display = "block"
    }





    return (
        <>

                <BrowserRouter>
                    <nav class="nav">
                        <Link onClick={myClick1} class="nav-link" to="/home">HOME</Link>
                        <Link onClick={myClick} class="nav-link" to="/skills">SKILLS</Link>
                        <Link onClick={myClick} class="nav-link" to="/projects">PROJECTS</Link>
                        <Link onClick={myClick} class="nav-link" to="/contact">CONTACT</Link>
                    </nav>

                    <Routes>
                        <Route path="/skills" element={<Skills />}> </Route>
                        <Route path="/projects" element={<Projects />}> </Route>
                        <Route path="/contact" element={<Contact />}> </Route>
                    </Routes>
                </BrowserRouter>

                    <div id="hi">
                    <div id="totaldiv3">
                        <div id="firstdiv1">
                            <h5 id="myText"><b>Hi it's Me</b></h5>
                            <h1 id="myNam">I'm Vibinkumar</h1>
                            <h5 id="myText2"><b>I'm a professional Web Developer. Our Main Goal to help &
                                Satisficed the Local & Global Clients by web development solutions</b></h5>

                            <a href={"https://www.linkedin.com/in/vibinkumar-v-79253821a"}><img class="socialimg" src={Image2} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href={"https://www.facebook.com/vibinkumar.vibinkumar.353?mibextid=ZbWKwL"}><img class="socialimg" src={Image3} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href={"https://twitter.com/Vibinku91766659?t=60ftSC412bdeLJmrncIeUw&s=08"}><img class="socialimg" src={Image4} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href={"https://instagram.com/vibin_kumar_24?igshid=OGQ5ZDc2ODk2ZA=="}><img class="socialimg" src={Image5} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div id="thirddiv">
                                <a href={"https://drive.google.com/file/d/174MIRvrNOqGuUm6tjkKbFNmU_YshLcpb/view?usp=drivesdk"}><h1 id="res">RESUME</h1></a>
                            </div>


                        </div>

                        <div id="seconddiv1">
                            <img id="im" src={Image1} />
                           
                        </div>

                        </div>

            </div>




        </>
    )
}

export default Home