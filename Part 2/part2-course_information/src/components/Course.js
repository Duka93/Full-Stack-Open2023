import React from "react";


export default function Course(props){
  
    const course_mapping = props.courses.map(course=>{
      const initial = 0;
      const reduce = course.parts.reduce((counter, one_part)=>
        counter+one_part.exercises, initial)
      return(
        <div key={course.id}>
  
          <h1>{course.name}</h1>
  
          {course.parts.map(part=>
            <p key={part.id}>{part.name} {part.exercises}</p>)}
          
          <p style={{fontWeight:"bold"}}>Total number of exercises: {reduce}</p>
  
  
        </div>
      )
    })
      return(
          <div>
              {course_mapping}
          </div>
      )
  }