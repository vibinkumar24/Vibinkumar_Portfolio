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
import Image6 from "./velammal.jpg";
import Image7 from "./set.png";
import Image8 from "./project1.jpg";
import Image9 from './verzeo.png'
import Image10 from './Equad.png'
import "./home.css";
import About from "./about";



function Home() {

    function myClick() {
        document.getElementById("totaldiv3").style.display = "none";
        document.getElementById("hi").style.display = "none";
    }

    function myClick1() {
        document.getElementById("totaldiv3").style.display = "block"
        document.getElementById("hi").style.display = "none";
    }

    function myClick2() {
        document.getElementById("hi").style.display = "block"
        document.getElementById("totaldiv3").style.display = "none";
    }
    function myClick3() {
        document.getElementById("clg-div").style.display = "block";

    }

    function myClick4() {
        document.getElementById("sch-div1").style.display = "block";
        document.getElementById("sch-div2").style.display = "block";

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

            <div id="totaldiv3">
                <div id="firstdiv1">
                    <h5 id="myText"><b>Hi it's Me</b></h5>
                    <h1 id="myNam">Vibinkumar</h1>
                    <h5 id="myText2"><b>I am a professional web developer with the main goal of providing web development solutions to satisfy both local and global clients.</b></h5>
                    <a href={"https://www.linkedin.com/in/vibinkumar-v-79253821a"}><img class="socialimg" src={Image2} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href={"https://www.facebook.com/vibinkumar.vibinkumar.353?mibextid=ZbWKwL"}><img class="socialimg" src={Image3} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href={"https://twitter.com/Vibinku91766659?t=60ftSC412bdeLJmrncIeUw&s=08"}><img class="socialimg" src={Image4} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href={"https://instagram.com/vibin_kumar_24?igshid=OGQ5ZDc2ODk2ZA=="}><img class="socialimg" src={Image5} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div id="thirddiv">

                        <h1 id="res" onClick={myClick2}>About Me</h1>
                    </div>


                </div>

                <div id="seconddiv1">
                    <img id="im" src={Image1} />

                </div>
            </div>


            <div id="hi">
                <h6 style={{ color: "black" }}>.</h6>
                <div id="seconddiv">
                    <h1 class="head1">ABOUT ME</h1><br />
                    <h5 class="myText1">Hi I'am Vibinkumar as a highly motivated engineer with a passion for technology and a strong foundation in engineering principles,i am eager to embark on a dynamic career in the it industry, my career objectives are centered around by:</h5><br />
                    <h3 class="head3">&#10143;Technical Proficiency</h3>
                    <h3 class="head3">&#10143;Problem-Solving Skills</h3>
                    <h3 class="head3">&#10143;Leadership Aspirations</h3>
                    <h3 class="head3">&#10143;Client-Centric Approach</h3>
                    <h3 class="head3">&#10143;Adaptability</h3>
                    <h3 class="head3">&#10143;Customer Satisfaction</h3>
                    <h3 class="head3">&#10143;Project Management</h3>
                </div>
                <div id="aca-det">
                    <h2 id="aca">ACADEMICS DETAILS</h2>
                    <img onClick={myClick3} id="clg" src={Image6} />
                    <h3 style={{ color: "yellow" }} class="click-img"> &nbsp;Click Image</h3>
                    <div id="clg-div">
                        <h2 id="clg-year">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019-2023</h2>
                        <h3 class="click-img">I completed My Bachelor Of Engineering in Electrical and Electronics Engineering with an Overall CGPA of 7.92 in Velammal Engineering College Surapet,Chennai.
                        </h3>
                    </div>
                    <img onClick={myClick4} id="sch" src={Image7} />
                    <h3 style={{ color: "yellow" }} class="click-img">Click Image</h3>
                    <div id="sch-div1">
                        <h2 id="sch-year1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2018-2019</h2>
                        <h3 class="click-img">I Completed My Higher Secondary Certification(HSC)from S.E.T Vidhya devi Matric Hr Sec School at pattukkottai with 57.66 %.</h3>
                    </div>
                    <div id="sch-div2">
                        <h2 id="sch-year2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016-2017</h2>
                        <h3 class="click-img">I Completed My Secondary School Leaving Certificate(SSLC) from S.E.T Vidhya devi Matric Hr Sec School at pattukkottai with 90.2%.</h3>
                    </div>

                </div>
                <div id="aca1">
                    <h2 id="aca-pro">ACADEMICS PROJECT</h2>
                    <h3 id="pro-tit">SEA-WAY BORDER ALERT SYSTEM USING RSSI</h3>
                    <h4>To develop a location based border identification system with
                        time using Received Signal Strength Indication (RSSI) which
                        works in all climatic conditions which can be fixed in boats.</h4>
                    <img id="pro-img" src={Image8} />

                </div>
                <div id="int">
                    <h2 id="int-det">INTERNSHIP</h2>
                    <h3 id="int-tit1">IOT Internship</h3>
                    <h4>Completed the Internship on Internet of things at VERZEO
                        from 01/05/2021 to 30/06/2021.</h4>
                    <img id="int-img1" src={Image9} />
                    <h3 id="int-tit2">EQUAD Internship</h3>
                    <h4>Completed the Internship at EQUAD Engineering Services
                        Pvt.Ltd. from 13/12/2021 to 31/12/2021.</h4>
                    <img id="int-img2" src={Image10} />

                </div>
            </div>

        </>
    )
}

export default Home