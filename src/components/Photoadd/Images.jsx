import React from "react";
import "../Showinfo/Showinfo.css"
import Pic from "./Pic"

function Images(props){
    
    
    const  renderinfo =props.imgsrc.map((image)=>{
     
        return(
            <Pic img={image} />
        );
    })
    return (
        <div >
            {renderinfo}
        </div>
    );
   
}

export default  Images;