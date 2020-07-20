import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
	  persons: [
	  { name: 'Max', age: 28 },
	  { name: 'Nicholas', age: 27}
	  ]
  });
  
  //const [otherState, setOtherState] = useState('some other value:')
  
  const switchNameHandler = (newName) => {
	  //console.log('Was Clicked!')
	  //DON'T DO THIS !!!this.state.persons[0].name = 'Christopher'
	  setPersonsState({persons: [
	  { name: newName, age: 28 },
	  { name: 'Max', age: 27}
	  ]})
  }
  
  const nameChangedHandler = (event) => {
	  setPersonsState({persons: [
		  {name: 'Max', age: 27},
		  {name: event.target.value, age: 29 }
		  ]})
  }
  
  const style = {
	  backgroundColor: 'white',
	  font: 'Inherit',
	  border: '1x solid blue',
	  padding: '8px'
  }
  
  return (
      <div className="App">
	  	<h1> New React App </h1>
		<p> This is working! </p>
		<button style={style} onClick={() => switchNameHandler('Adrian')}>Switch Name</button>
		<Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
		//use bind instead of anon function
		<Person name={personsState.persons[1].name} age={personsState.persons[1].age} click={switchNameHandler.bind(this, 'Andrew')} changed={nameChangedHandler}>My Hobbies: Codeing</Person>
      </div>
    );
	
	//return //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'))
}

export default App;
