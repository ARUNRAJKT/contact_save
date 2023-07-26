import React from "react";

import Student from "./Student"

function Studentdetails(props){
    
    
    const  renderinfo =props.shows.map((contacts)=>{
     
        return(
            <Student cinfo={contacts} />
        );
    })
    return (
        <div >
            {renderinfo}
        </div>
    );
}

export default  Studentdetails;