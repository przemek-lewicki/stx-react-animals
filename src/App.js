import React, { Component } from 'react';

import Form from './Form.component';
import AnimalsList from './AnimalsList.component';

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      animals: []
    }

    this.setAnimalsArr = this.setAnimalsArr.bind(this)
  }

  setAnimalsArr(animals) {
    this.setState({
      animals
    })
  }

  render() {
    return (
      <div className="App">
        <Form setAnimalsArr={this.setAnimalsArr}/>
        <AnimalsList list={this.state.animals}/>
      </div>
    );
  }
}

export default App;
