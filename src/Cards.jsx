import React from 'react';
function Card(props){
    return (
      <>
    <div className="cards">
      <div className="card">
        <div className="card_info" >
          <h6 className="card_heading">{props.id}</h6>
          {props.image ? (<img  src={props.image} alt="ReadDataPic" className="card_img"/>) : ("")}  
          <h4 className="card_category">{props.title}</h4>
          <h5 className="card_title">{props.content}</h5>
          <h6 className="card_title" style={{color:"magenta"}}>{props.time}</h6>
          <a href="#" className="card_link">{props.link}</a>
          
        </div>
      </div>
    </div>
  </>
  
    );
  }
  export default Card;
