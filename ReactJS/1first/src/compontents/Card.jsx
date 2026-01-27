import React from "react";

function Card(props) {
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
    <div className="card" style={{ width: "18rem" ,padding:'10px', margin:'15px'}}>
      <img className="card-img-top" src={props.cImg} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.ctitle}</h5>
        <p className="card-text">{props.ctext}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
    </div>
  );
}

export default Card;
