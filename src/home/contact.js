import React from "react";
import "./contact.css"
function Contact(){


    function Form(e) {
        var a=document.getElementById("text1").value;
        var b=document.getElementById("text2").value;
        var c=document.getElementById("text3").value;
        
        
        if(a=="" || b=="" || c==""){
            document.getElementById("error").innerHTML="*Fill the all details*";
        }else{
           console.log(a);
            console.log(b);
            console.log(c);
            var a=alert("succesfully submitted ✔️...Have a good day ✨");
            document.getElementById("error").style.display="none";
            const element = document.getElementById('form');
        element.reset()
        
        
        }
        e.preventDefault()
      }



    return(

        <>
        <div id="totaldiv2">
        <h6 style={{color:"black"}}>.</h6>
            <div id="eighthdiv">
                <h3>&#128100;&nbsp;VIBINKUMAR. V</h3><br/>
                <h3 id="myhome">&#9750;&nbsp;&nbsp;A603, A Block,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Radiance Mercury Apartment, <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gandhi Nagar Society,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Perumbakkam, Chennai-600100.</h3><br/>
                <h3> &#9743;&nbsp;&nbsp;+919360249708</h3><br/>
                <h3>&#9993;&nbsp;&nbsp;vibinpvi2001@gmail.com</h3><br/>
                <form id="form">
                <h4>&#128172;&nbsp;For any queries :</h4>
                <h4>&nbsp;Name :</h4>
                <input id="text1" class="text" type="text"></input>
                <h4>&nbsp;E-mail :</h4>
                <input id="text2" class="text" type="email"></input>
                <h4>&nbsp;Queries :</h4>
                <textarea id="text3" class="text"></textarea><br/>
                <h4 style={{color:"red",fontFamily:"Nunito"}} id="error"></h4>
                <button id="btn" onClick={Form} type="submit">Submit</button>
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