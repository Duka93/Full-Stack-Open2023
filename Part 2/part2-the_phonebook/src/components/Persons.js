import React from "react";

export default function Persons(props){
    const mapiranje = props.persons.map(person=>{
        if(person.name.toLowerCase().includes(props.search.toLowerCase())){
        return <p key={person.name}>{person.name} {person.phone}</p>}})
    return(
    <div>
      {mapiranje}
    </div>  
    )
}