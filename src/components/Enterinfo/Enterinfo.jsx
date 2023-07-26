import React,{useState} from "react";
import "./Enterinfo.css"


    // const [user,setUser]=useState("")
    // const[email,setEmail]=useState("")
    // const [userError,setUserError]=useState(false)
    // const [emailError,setEmailError]=useState(false)

    // function login(e){
    //     if (user.length<3||email.length<3){
    //         alert("Please provide correct values")
    //     }
    //     else{
    //         alert("Contact added!")
    //     }
    //     e.preventDefault();
    // }

    // function emailHandler(e){
    //     let item=e.target.value;
    //     console.log(item)
    //     if (item.length<3) {
    //        setEmailError(true)
        
    //     } else {
    //         setEmailError(false)
    //     }
    // setEmail(item)
    // }

    //     function userHandler(e){
    //         let item=e.target.value;
    //         console.log(item)
    //         if (item.length<3) {
    //             setUserError(true)
                
    //         } else {
    //             setUserError(false)
    //         }
    //         setUser(item)
    
    //     }



//     =--------class using----------
//     class Enterinfo extends React.Component{
//            state={
//                name:"",
//                email:""

//            }
//             editform=props.state
//            addcontact=(e)=>{
//                e.preventDefault();
//                if(this.state.name===""&&this.state.email==="")
//                {
//                alert("please enter the details....")
//                return
//            }
           
//            this.props.contactHandler(this.state)
//            this.setState({name:"",email:""})
//            console.log(this.state)

//         }
//         render(){
//    --------------------------







function Enterinfo (props){
    const [inputs,setInputs]=useState({})
    const editform=props.state
    const name=props.data[0]
    console.log("data=<<"+name)
   
    const handlechange = (event)=>{
        const name = event.target.name;
        const value =event.target.value;
        setInputs(values=>({...values,[name]:value}))
    }
    var handlesubmit =(event)=>{
        event.preventDefault();
        props.contactHandler(inputs)
        console.log(inputs)
        setInputs("")
    }


    return(
        <React.Fragment>
         {editform===false&& (
         <div className="mainDiv">
             <center>
             <div className="topDiv">
                 <h1>Contact List</h1>
             </div><br />
             <div className="line"></div>
            <div className="inputvalues">
                <h3>Add Contact</h3>
                {/* <form onSubmit={this.addcontact}> */}
                <form onSubmit={handlesubmit}>

                Name &nbsp;:&nbsp;&nbsp;

                <input type="text"
                // value={this.state.name}
                //  onChange={(e)=>this.setState({name:e.target.value})}
                value={inputs.name||""}
                onChange={handlechange}
                  placeholder="Name" 
                   name="name" />
                   <br /><br /><br />

                {/* {userError?<span id="error">Name not valid</span>:""}<br/><br /> */}

                Email &nbsp;:&nbsp;&nbsp;
                <input type="email"
                // value={this.state.email}
                // onChange={(e)=>this.setState({email:e.target.value})}
                value={inputs.email||""}
                onChange={handlechange}
                 placeholder="Email"
                  name="email" />
                <br /><br />
                {/* {emailError ? <span id="error">Email not valid</span>:""}<br /> */}
                <input type="submit" name="" id="add" value="ADD"/>
                </form>
            </div>
          
           </center>
         </div>)}
         {editform===true&& (
         <div className="mainDiv4">
             <center>
             <div className="topDiv">
                 <h1>Contact List</h1>
             </div><br />
             <div className="line"></div>
            <div className="inputvalues">
                <h3>Edit Contact</h3>
                {/* <form onSubmit={this.addcontact}> */}
                <form onSubmit={handlesubmit}>

                Name &nbsp;:&nbsp;&nbsp;

                <input type="text"
                // value={this.state.name}
                //  onChange={(e)=>this.setState({name:e.target.value})}
                value={inputs.name||name.name}
                onChange={handlechange} 
                  placeholder="Name" 
                   name="name" />
                   <input type="text" hidden />
                   <br /><br /><br />

                {/* {userError?<span id="error">Name not valid</span>:""}<br/><br /> */}

                Email &nbsp;:&nbsp;&nbsp;
                <input type="email"
                // value={this.state.email}
                // onChange={(e)=>this.setState({email:e.target.value})}
                value={inputs.email||name.email}
                onChange={handlechange}
                 placeholder="Email"
                  name="email" />
                <br /><br />
                {/* {emailError ? <span id="error">Email not valid</span>:""}<br /> */}
                <input type="submit" name="" id="update" value="UPDATE"/>
                </form>
            </div>
          
           </center>
         </div>)}
        
        </React.Fragment>


    );
}

export default  Enterinfo;