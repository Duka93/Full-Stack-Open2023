import React, { useState } from 'react';


function StatisticsLine(props){
  return(
     <td>{props.text} {props.value}</td>
  )

}

function Statistics(props){
  return(
      <div>
        <table>
          <tbody>
            <tr>
              <StatisticsLine text="good" value={props.good}/>
            </tr>
            <tr>
              <StatisticsLine text="neutral" value={props.neutral}/>
            </tr>
            <tr>
              <StatisticsLine text="bad" value={props.bad}/>
            </tr>
            <tr>
              <StatisticsLine text="all" value={props.good+props.bad+props.neutral}/>
            </tr>
            <tr>
              <StatisticsLine text="average" value={(props.good+props.bad+props.neutral)/3}/>   
            </tr>
            <tr>
              <StatisticsLine text="positive" value={100*props.good/(props.good+props.bad + props.neutral)}/>
            </tr>
          </tbody>
        </table>
      </div>
  )
  }

function Button(props){
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

function App() {
  const[good,setGood] = useState(0)
  const[bad,setBad] = useState(0)
  const[neutral,setNeutral] = useState(0)

  function handleClickGood(){
    setGood(good+1)
  }
  function handleClickBad(){
    setBad(bad+1)
  }
  function handleClickNeutral(){
    setNeutral(neutral+1)
  }

  return (
    <div className="App">

      <h1>give feedback</h1>
      <Button text="good" handleClick={handleClickGood}></Button>
      <Button text="neutral" handleClick={handleClickNeutral}></Button>
      <Button text="bad" handleClick={handleClickBad}></Button>
      <h1>statistics</h1>
      {good>0 || bad>0 || neutral >0 ? <Statistics good={good} bad={bad} neutral={neutral}></Statistics> : <p>No feedback given</p>} 
    </div>
  );
}

export default App;
