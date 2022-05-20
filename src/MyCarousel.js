import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import Java from './Java.jpg';
 export default function MyCarousel(){

  const CARD_STYLE ={
   
      height: '400px',
      width: '400px',
      paddingTop: '20px',
      paddingLeft:'55px',
      textAlign: 'center',
      background: '#52C0F5',
      //color: '#FFF',
      fontSize: '12px',
      textTransform: 'uppercase',
      borderRadius: '10px',
    };
  

    return (
      <div className="bg-white container-fluid" style={{height:"100%"}}>
      
      <h1 className="text-center text-decoration-underline">FEATURES</h1>
      
      <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 } >
       
        <div style={ CARD_STYLE }>
        <div class="card" style={{width:"18rem"}}>
  <img class="card-img-top" src={Java} alt="Card image cap" style={{height:"200px"}}/>
  <div class="card-body">
    <h5 class="card-title">Java programmin</h5>
    <p class="card-text">Java is a high level programming langauge developed by james goslin Java is a platform independent programming</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        <div style={ CARD_STYLE }>
        <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/71605qSF9ZL.jpg" alt="Card image cap" style={{height:"200px"}}/>
  <div class="card-body">
    <h5 class="card-title">C++ programming</h5>
    <p class="card-text">C++ is a Object Oriented as well as procesural programmin langauge</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        <div style={CARD_STYLE }>
        <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/71rNgxcJMqL.jpg" alt="Card image cap" style={{height:"200px"}}/>
  <div class="card-body">
    <h5 class="card-title">Object Oriented</h5>
    <p class="card-text">Object Oriented is a paradigam which is used to corelate programming concept with real word</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        <div style={CARD_STYLE }>
        <div class="card" style={{width:"18rem"}}>
  <img class="card-img-top" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348516232l/4026793.jpg" alt="Card image cap" style={{height:"200px"}}/>
  <div class="card-body">
    <h5 class="card-title">Python Book</h5>
    <p class="card-text">Python is a programming langauge which is developed by guido van rossom for machine learning or web application.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        <div style={ CARD_STYLE }>
        <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src="https://m.media-amazon.com/images/I/51Hfz3tMK-L._SX260_.jpg" alt="Card image cap" style={{height:"200px"}}/>
  <div class="card-body">
    <h5 class="card-title">C-Sharp Book</h5>
    <p class="card-text">C sharp is a programming langauge developed my microsoft c sharp is used to make web as well as console application</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        
      </ReactCardCarousel>
      </div>
    );
 }
  
