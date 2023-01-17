import React from "react";
export default function Setcard(props) {

  return (
    <>
    
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{ props.content}...</p>
          <a href={props.item.url} target="_blank" rel="noreferrer" className="btn btn-primary">
            read more
          </a>
        </div>
      </div>
    </>
  );
}
