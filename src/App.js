import React, { Component } from 'react';
import FoodBox from './FoodBox/FoodBox';
import Foods from './foods.json'
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  state = {
    allFoods: [
      ...Foods
    ]
  }

  render() {
    return (
      <div className="App">
      <h1>IronNutrition</h1>
      <button></button>
        {this.state.allFoods.map((oneFood, index) => {
          return <FoodBox key={index} {...oneFood}/>
        })} 
      </div>
    );
  }
}

export default App;
