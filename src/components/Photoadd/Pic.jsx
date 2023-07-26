import React from "react";
import "../Photoadd/Pic.css"

function Pic(props){
   console.log(props)
   const { imgsrc } = props.src;
   
    return(
         <div className="mainDiv2">
             <center>
            <div className="inputvalues2"><br />
               <div className="details">
                  <img src={imgsrc} alt="" />
               </div>
            </div>
          
           </center>
         </div>
    );
}

export default  Pic;