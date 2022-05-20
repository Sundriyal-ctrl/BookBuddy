import React, { useEffect, useState } from 'react'
import image1 from './w.jpg';
import Java from './Java.jpg';
import Maths12 from './Maths12.jpg';
import Physics12 from './Physics12.jpg';
export default function Latest() {
  const notes = [

  ]
  const [data, setData] = useState(notes);
   var a=[Java,Maths12,Physics12];
   var i=0;
  useEffect(() => {
    fetch('https://hoteltechfix.000webhostapp.com/BookBuddy/jsonselect.php').then((result) => {
      result.json().then((res) => {
        setData(res);
      })
    })
  }, []);

  return (
    <div className="container-fluid bg-white" >
    <br></br><br></br>
     <h2 className="text-center text-decoration-underline">Latest Books is Added</h2>
     <hr></hr>
     <br></br><br></br>
      <div className="row container" id="bo" style={{marginLeft:"150px"}}>
        {data.map((index) => {
        
          return <div className=" col-sm-4  " key={index.id}>
          
            <div className="card-img-top" style={{ width: "18rem" }}>
          
            <img src={a[i++]} style={{width:"250px",height:"280px"}} />
                <div className="card-body">
                 
                  
                  <h5 className="card-title">Title : {index.Name}</h5>
                  <p className="card-text"><strong>Class : </strong>{index.Class}</p>
                  <p className="card-text"><strong>Cost : </strong>{index.Price}</p>
                  <a href="#" className="btn btn-warning">Buy Book</a>
                </div>
             </div>
            </div>

            })}
           </div>            
        </div>
    )
}
