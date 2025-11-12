import React from "react";

function Button(props) {
  return (
    <>
      <button className={props.className} onClick={props.click}>
        {props.children}
      </button>
    </>
  );
}

export default Button;
