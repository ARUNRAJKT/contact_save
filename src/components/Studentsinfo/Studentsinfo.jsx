import React,{useState} from "react";
import "./Studentsinfo.css"



    function Studentsinfo (props){
        const [inputs,setInputs]=useState({})
       
        const handlechange = (event)=>{
            const name = event.target.name;
            const value =event.target.value;
            setInputs(values=>({...values,[name]:value}))
        }
        var handlesubmit =(event)=>{
            event.preventDefault();
            props.studenthandle(inputs)
            console.log(inputs)
            if(event.target.value==="")
            {
                alert("please enter the details")
            }
        }


    return(
         <div className="firstDiv">
             <div className="secondDiv"><center>
                 <h3> STUDENTS DETAILS </h3><br />
                 </center>
                 <div className="senter"><form  onSubmit={ handlesubmit }> 
                 NAME :&nbsp;<input type="text" name="studentname" value={inputs.studentname ||""} onChange={handlechange}/><br />
                 COURSE :&nbsp;<input type="text" name="course" value={inputs.course ||""} onChange={handlechange}/><br />
                 AGE :&nbsp;<input type="number" name="age" value={inputs.age ||""} onChange={handlechange}/><br />
                 GRADE :&nbsp;<input type="text" name="grade" id="" value={inputs.grade ||""} onChange={handlechange}/><br />
                 
                 <center>
                     <input style={{"width":"200px","color":"black"}} type="submit" value="Add Students Details" />
                     </center> </form>
                     
                     </div>
                
                 </div>
           
          
           
         </div>
    );
}


export default  Studentsinfo;