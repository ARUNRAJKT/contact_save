
import './App.css';
import React, { useEffect, useState } from 'react';

import Enterinfo from './components/Enterinfo/Enterinfo';
import {v4 as uuidv4} from "uuid";
 import Showinfo from './components/Showinfo/Showinfo';
import Gallery from './components/Photoadd/Gallery';
import Images from './components/Photoadd/Images';
import Studentsinfo from './components/Studentsinfo/Studentsinfo';
import Studentsdetails from './components/Studentsinfo/Studentdetails';


function App() {
 
  // const info = [
  //   {
  //       id:1,
  //       name:"arun",
  //       email:"arun@gmail.com",
  //       src:"https://th.bing.com/th/id/OIP.fBYQQAMqYDFxOh5dWobzLgHaFj?pid=ImgDet&w=3265&h=2449&rs=1"
  //   },{
  //     id:2,
  //       name:"athul",
  //       email:"athulc@gmail.com",
  //       src:"https://thewallpaper.co/wp-content/uploads/2020/09/nature-backgrounds-amazing-landscape-widescreen-wallpaper-of-nature-cool-photos-free-nature-images-high-resolution-images-field-1458x1003-1.jpg"
  //   }
        // ]


        const[info,setinfo]=useState([])  
        
        const[editform,setForm]=useState(false)
        const[editdetails,setEdit]=useState([])
        const contactHandler=(details)=>{
             setinfo([...info,{id:uuidv4(),...details} ])
             console.log("----------"+info+"-----------")
        }

        // const studenthandle=(enterdetails)=>{
        //        setinfo([...info,enterdetails])
        // }
        const removeContact=(id)=>{
          console.log("removecontatct"+id)
          const newContatctlist=info.filter((details)=>{
            return details.id!==id
          })
          setinfo(newContatctlist)
        }


        const editContact=(id)=>{
          // console.log("editContact"+id)
          const editContactList=editdetails.filter((details)=>{
            return details.id===id
          })
          console.log("contactlist"+editContactList)
          setEdit(editContactList)
          setForm(true)
        }

        const Local_Storage="deatailsss"

        useEffect(()=>{
          const Old_storage=JSON.parse(localStorage.getItem(Local_Storage))
          if(Old_storage){
            console.log("===="+Old_storage+"=====old storage")
            setinfo(Old_storage)
          }
        },[])

        
        useEffect(()=>{
          localStorage.setItem(Local_Storage,JSON.stringify(info))
        },[info])
        console.log(info+"infooo")
        
        return(
          <React.Fragment>
            {/* <Studentsinfo studenthandle={studenthandle}/>
           <Studentsdetails shows={info}/> */}
               {/* <Gallery/>

              <Images imgsrc={info}/>  */}
              <Enterinfo showedit={editdetails} contactHandler={contactHandler} data={editdetails} state={editform}/>
              <Showinfo showData={info} removeContact={removeContact} editContact={editContact} key={info.id}/>
  
          </React.Fragment>
      )
}

export default App;
