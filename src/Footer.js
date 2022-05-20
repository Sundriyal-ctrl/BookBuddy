import React from "react";

const FooterPage = () => {
  return (
       <div>
       <hr></hr>
       <div className="row ">
        <h2 className="text-center">FEED-BACK STORY</h2>
        <div className="col-sm-12 " style={{padding:"20px 400px 0 400px"}}>
         <form>
           <div>
           <input type="email" placeholder="Enter Email" class="form-control" required/>
           </div>
           <br></br>
           <div>
             <textarea placeholder="Enter Message" className="form-control" required/>
           </div>
           <br></br>
           <div className="d-grid gap-2 my-2">
               <button className="btn btn-warning">SUBMIT FEEDBACK</button>
               </div>
         </form>
        </div>
       </div>
        <div className=" text-center py-3 bg-black" style={{color:"white"}}>
        <div>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com">anujsundriyal1234@gmail.com</a>
        </div>
      </div>
      </div>
  );
}

export default FooterPage;