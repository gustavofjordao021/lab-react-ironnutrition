import React, { Component } from 'react';
import FoodBox from './FoodBox/FoodBox';
import Foods from './foods.json'
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import FoodForm from './FoodForm/FoodForm';

class App extends Component {
  state = {
    allFoods: [
      ...Foods
    ],
    addFood: false
  }

  addFoodFunction = () => {
    this.setState({
      addFood: true
    });
  }

  render() {
    return (
      <div className="App">
      <h1>IronNutrition</h1>
      <button onClick={() => this.addFoodFunction()}>Add new food</button>
      <FoodForm addFood />
        {this.state.allFoods.map((oneFood, index) => {
          return <FoodBox key={index} {...oneFood}/>
        })} 
      </div>
    );
  }
}

export default App;
