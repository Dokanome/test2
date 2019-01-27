import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Hobbies from './Hobbies/Hobbies'



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, im a React App</h1>
        <p>This is really working</p>
        <Person name="Max" age="28"/>
        <Hobbies sports="basketball"/>
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className:'App'}, 'Does this work now?'));
  }
}

export default App;
