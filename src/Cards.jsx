import React from 'react';
function Card(props){
    return (
      <>
    <div className="cards">
      <div className="card">
        {props.image ? (<img style={{ width: "200px" }} src={props.image} alt="ReadDataPic" className="card_img"/>) : ("")}
        <div className="card_info" >
          <h3 className="card_category">{props.title}</h3>
          <h5 className="card_title">{props.content}</h5>
          <h6 className="card_title" style={{color:"magenta"}}>{props.time}</h6>
        </div>
      </div>
    </div>
  </>
  
    );
  }
  export default Card;