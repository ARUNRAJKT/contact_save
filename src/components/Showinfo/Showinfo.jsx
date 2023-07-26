import React,{useState} from "react";
import "./Showinfo.css";
import Details from "./Details"

function Showinfo(props){
    
    
    const  renderinfo =props.showData.map((contacts)=>{
        const deletecontacthandler=(id)=>{
            props.removeContact(id)
        }
        const editcontatcthandler=(id)=>{
            props.editContact(id)
        }

     
        return(
            <Details cinfo={contacts} clickremove={deletecontacthandler} clickEdit={editcontatcthandler}/>
        );
    })
    return (
        <div >
            {renderinfo}
        </div>
    );
   
}

export default  Showinfo;