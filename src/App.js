import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      { name:"Max" , age:"28" },
      { name:"James" , age:"25" },
    ],
    otherState: 'some other value'
  }
  
  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState({
      persons: [
        { name:newName , age:"28" },
        { name:"Jamey" , age:"50" },
      ] 
    } )
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name:"Max" , age:"28" },
        { name:event.target.value, age:"25" },
      ] 
    } )
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '5px solid green',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, im a React App</h1>
        <p>This is really working</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Maxim!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}/>My Hobbies are Basketball

        </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className:'App'}, 'Does this work now?'));
  }
}

export default App;
