import React from "react";

export default function Form(props){
    return(
    <div>
      <form onSubmit={props.addPerson}>
        
        <div>
          name: <input onChange={props.handleNameChange} value={props.newName} />
        </div>
        <div>
          phone: <input value={props.phone} onChange={props.handlePhoneChange}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>  
    )
}