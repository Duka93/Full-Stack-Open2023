import React from 'react';
import { useState } from 'react';
import SearchFilter from './components/Filter.js';
import Form from './components/Form.js';
import Persons from './components/Persons.js';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const[phone,setPhone] = useState("")
  const[search,setSearch] = useState("")

  
  function handleNameChange(event){
    setNewName(event.target.value)
  }

  function handlePhoneChange(event){
    setPhone(event.target.value)
  }

  function handleSearchChange(event){
    setSearch(event.target.value)
  }

  function addPerson(event){
    event.preventDefault()
    const newPerson = {name: newName, phone:phone}
    let check = true
    const dusan = persons.map(person=>{
      if (person.name.toLowerCase()===newPerson.name.toLowerCase()){
        check = false
        return alert(`${newName} is already in the list`)
      }
    })
    if(check){
      setPersons(persons.concat(newPerson))
      setNewName("") 
      setPhone("")
    }
  }

  return (
    <div>
      
      <h1>Phonebook</h1>

      <SearchFilter search={search} change={handleSearchChange}/>

      <h2>Add a new</h2>

      <Form addPerson={addPerson} handleNameChange={handleNameChange} newName={newName} phone={phone} handlePhoneChange={handlePhoneChange}></Form>
      
      <h2>phones</h2>
      
      <Persons persons={persons} search={search}></Persons>
      
    </div>
  )
}

export default App