import React from "react";
import "./contact.css"
function Contact(){


    // function buttonClear() {
    //     const element = document.getElementById('text').value;
    //     element.reset()
    //   }



    return(

        <>
        <div id="totaldiv2">
            <div id="eighthdiv">
                <h3>&#128100;&nbsp;VIBINKUMAR. V</h3><br/>
                <h3 id="myhome">&#9750;&nbsp;&nbsp;NO: 384, Nadakadu,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kuruvikkarambai(po),Peravurani(tk),<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thanjavur(dt)-614802</h3><br/>
                <h3> &#9743;&nbsp;&nbsp;+919360249708</h3><br/>
                <h3>&#9993;&nbsp;&nbsp;vibinpvi2001@gmail.com</h3><br/>
                <h4>&#128172;&nbsp;For any queries :</h4>
                <form>
                <textarea id="text"></textarea><br/>
                <button id="btn" type="submit">Submit</button>
                </form>
            </div>

            <div id="ninthdiv">
                <h6 id="copyRights"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&copy; 2023 VIBINKUMAR.V Portfolio<br/> All rights reserved. | Privacy Policy | Terms of Service</h6>
            </div>
        </div>
        </>
    )
    
}

export default Contact