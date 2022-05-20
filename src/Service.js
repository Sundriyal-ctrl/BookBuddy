import {useLocation} from 'react-router-dom';
import {useHistory} from 'react-router'
import Java from './Java.jpg';
import Physics12 from './Physics12.jpg';
import Maths12 from './Maths12.jpg';
export default function Service() {
  const location=useLocation();
  const history=useHistory();
 console.log(location.state.data);
 var a=[Java,Maths12,Physics12];
   var i=0;
  const change=(idd,r)=>{
   
    history.push({
        pathname: '/Registration',
       state:{
            Name:r,
            Price:idd,
       }
    });
  }
    return (
        <div className="container bg-white" style={{paddingLeft:'70px'}}>
            <br></br><br></br>
       
     <div >  
           <div className="row">
             {location.state.data.map((index) => {
                 return <div className="card col-sm-3 mx-4" style={{width: "18rem"}} key={index.Region}>
                     <img className="card-img-top" src={a[i++]} style={{width:"250px",height:"280px"}}/>
                    
                     <div className="card-body">
                  
                         <h5 className="card-title"><strong>Title : </strong>{index.Name}</h5>
                         
                         <span className="card-text"><strong>Class : </strong>{index.Class}</span><br></br>
                         <span className="card-text"><strong>Price : </strong>{index.Price}</span><br></br>
                         <hr></hr>
                         
                          <br></br>
                          <div className="d-grid gap-2">
                         <button className="btn btn-warning" onClick={()=>change(index.Price,index.Name)} >Buy-Now</button>
                         </div>
                     </div>
                 </div>
             })}
             </div>
            
    
        </div>
        </div>
    )
}
