import React from "react";
import score from "./Score.css"


class Score extends React.Component {



  

 
 render() {
    return (
        <div className="score">
        <div className="row">
          <div className="col">
            <p>Score: {this.props.score} || High Score:{this.props.HighScore} </p>
          </div>
          </div>
          </div>
          
    );
  }
}

  // Score = (props) => {
  //   let value;
  
    // // Assign value based on the operator
    // switch (props.operator) {
    // case "+":
    //   value = props.num1 + props.num2;
    //   break;
    // case "-":
    //   value = props.num1 - props.num2;
    //   break;
    // case "*":
    //   value = props.num1 * props.num2;
    //   break;
    // case "/":
    //   value = props.num1 / props.num2;
    //   break;
    // default:
    //   value = NaN;
    // };

    export default Score;