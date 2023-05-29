import React from "react";


function Header(props){
    return(
        <h1>{props.course}</h1>
    )
}

function Part(props){
    return(
        <p>{props.name} {props.exercises}</p>
    )
}



function Content(props){
    return(
        <div>
        <Part name={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
        <Part name={props.course.parts[1].name} exercises={props.course.parts[1].exercises2}/>
        <Part name={props.course.parts[2].name} exercises={props.course.parts[2].exercises3}/>
        </div>
    )
}

function Total({course}){
    return(
     <p>Number of exercises: {course.parts[0].exercises + course.parts[1].exercises2 + course.parts[2].exercises3}</p>
    )
}



export default function App(){

  const course = {
    name : 'Half Stack application development',
    parts:[{
        name: 'Fundamentals of React',
        exercises: 10
    },
    
    {
        name:'Using props to pass data',
        exercises2: 7
    },
    
    {
        name:'State of a component',
        exercises3: 14

    }]}

    return(
        <div>
            <Header course={course.name}/>
            <Content course={course} />
            <Total course={course}/>
        </div>
    )
}