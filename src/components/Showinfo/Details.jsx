import React,{useState} from "react";
import "./Showinfo.css"

function Details(props){
//    console.log(props)
   const {id, name , email } = props.cinfo;
   
    return(
         <div className="mainDiv2">
             <center>
            <div className="inputvalues2"><br />
               <div className="profile"><i class="fa fa-user" aria-hidden="true"></i></div>
               <div className="details">
                   <span>{name}</span><br />
                   <span>{email}</span>
               </div>
               <i id="delete" class="fa fa-trash-o" aria-hidden="true" onClick={()=>props.clickremove(id)}></i>
               <i id="write" class="fa fa-pencil-square-o"  aria-hidden="true" onClick={()=>props.clickEdit(id)}></i>
            </div>
          
           </center>
         </div>
    );
}

export default  Details;