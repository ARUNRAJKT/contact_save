import React from "react";
import "../Enterinfo/Enterinfo.css"

function Gallery(){

    return(
         <div className="mainDiv">
             <center>
             <div className="topDiv">
                 <h1>Photo Gallery</h1>
             </div><br />
             <div className="line"></div>
            <div className="inputvalues">
                <h3>Add Contact</h3>
                <form >
                Upload &nbsp;:&nbsp;&nbsp;<input type="file" alt="image" placeholder="image"  name="image" /><br />
                <input type="submit" name="" id="add" value="Add image"/>
                </form>
            </div>
          
           </center>
         </div>
    );
}

export default  Gallery;