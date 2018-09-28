import React from "react";
 import style from "./Mascot.css";
 import Score from "../Score";


const Mascot = props => (
    <div className="card">
      <div className="img-container" >
        <img alt={props.name} attr={props.id} src={props.image} onClick={() => props.handleClick(props.id, props.name)}/>
      
        <div>{props.id}</div>
      </div>
      <div>
      </div>
      </div>
      )

      export default Mascot;