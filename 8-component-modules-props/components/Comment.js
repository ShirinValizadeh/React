import React from "react";
import Faker from "faker";

const Comment = (props) => {

  const rate = parseInt(props.rate);
  const stars = [];

  for (let i = 0; i < rate.length; i++) {
    stars.push(<i key={i}  className={"star icon" + props.starColor}></i>)
  }
  return (
    <div className="comment">
      <a className="avatar">
        <img src={Faker
          .image
          .avatar()}/>
      </a>
      <div className="content">
        <a className="author">{Faker
            .name
            .findName()}</a>
        <div className="metadata">
          <div className="date">2 days ago</div>
          <div className="rating">
            {stars}
            {props.rate}
          </div>
        </div>
        <div className="text">
          {props.text}
          Faves {props.style}
        </div>
      </div>
    </div>
  )
}

// export cpmponent
export default Comment