import React from "react";
import "./Studentdetails.css";

function Student(props){
   console.log(props)
   const { sname , scourse,sage,grade } = props.cinfo;
   
    return(
         <div className="firstDiv2">
            <div className="inputvalues2"><br />
               <div className="details">
                   <span>{sname}</span><br />
                   <span>{scourse}</span><br />
                   <span>{sage}</span><br />
                   <span>{grade}</span><br />
               </div>
            </div>
         </div>
    );
}

export default  Student;