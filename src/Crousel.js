import React,{useState} from 'react'
import Service from './Service';
import image from './wp.jpg';
import swal from 'sweetalert';
import {useHistory} from 'react-router'
import  './Bnc.css';
export default function Crousel() {
    let [place,setPlace]=useState('');
    const [response1,setRes]= useState('');

   
    const history=useHistory();
   
      
     const r={
        
         marginLeft:'60px',
         marginRight:'50px',
         marginTop:'60px',
        paddingTop:"20px",
        paddingBottom:"20px",
        paddingLeft:'20px',
        
     }
     const change=()=>{
        
        var req=new XMLHttpRequest();
  req.open("POST","https://hoteltechfix.000webhostapp.com/BookBuddy/jsonsearch.php?search="+place+"",true);
      
  req.send();
  req.onreadystatechange =()=>{

    if(req.readyState === 4 && req.status===200)
    {
            
       //document.getElementById("danger").innerHTML=req.responseText;
       setRes(req.responseText);
       
       //history.push("/Service");
       var my =JSON.parse(req.responseText);
       console.log(my[0].id)
       history.push({
        pathname: '/Service',
        state: { 
            data:my,
          }
    });
        }
        
    if(req.status===201)
    {
        swal("Error!", "Sorry Empty Field is not allowed and wrong input is also not allowed", "warning");   
    }
  }   
    }
    
     
    return (
        <div  style={{height:"450px"}} ><br/>
           
        <br/><br/>
        
        <div style={r} className="bg-warning" id="s">
   <div className="row" >
       
       <div className="col-sm-8">
           <input type="text" className="form-control shadow" placeholder="Enter Class for Which you want book"  onChange={(e)=>setPlace(e.target.value)} style={{textTransform:"uppercase",height:"50px"}} />
       </div>
       
      
       <div className="col-sm-4" id="v" >
    
           <button className="btn btn-info " onClick={change}><i className="fa fa-search" style={{color:"white",height:"33px",paddingTop:"10px"}}>CLICK TO SEARCH THE INSERTED BOOK</i> </button>
         
       </div>
           </div>
       
       
       
   </div>
        
</div>
    )
}
