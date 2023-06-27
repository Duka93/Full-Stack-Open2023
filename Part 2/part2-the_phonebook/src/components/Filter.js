import React from "react";

export default function SearchFilter(props){
    return(
    <div>
      <p>filter shown with</p>
      <input value={props.search} onChange={props.change}></input>
    </div>  
    )
}
