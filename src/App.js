import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      { name:"Max" , age:"28" },
      { name:"James" , age:"25" },
    ],
    otherState: 'some other value',
    showPersons: false
  }
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({person: persons})
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name:"Max" , age:"28" },
        { name:event.target.value, age:"25" },
      ] 
    } )
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState ({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '5px solid green',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click= {() => this.deletePersonHandler(index)}
            name= {person.name} 
            age= {person.age} />
          })}
          </div> 
      );
    }


    return (
      <div className="App">
        <h1>Hi, im a React App</h1>
        <p>This is really working</p>
        <button 
        style={style}
        onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
        </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className:'App'}, 'Does this work now?'));
  }
}

export default App;
