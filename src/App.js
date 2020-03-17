import React, { Component } from 'react';
import FoodBox from './FoodBox/FoodBox';
import Foods from './foods.json'
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

  addFoodForm = () => {
    this.setState({
      addFood: true
    });
  }

  addNewFood = newFood => {
    const foodCopy = [...this.state.allFoods];
    console.log(newFood)
    foodCopy.push(newFood);
    this.setState({
      allFoods: foodCopy,
      addFood: false
    });
  };

  render() {
    return (
      <div className="App">
      <h1>IronNutrition</h1>
      <button onClick={() => this.addFoodForm()}>Add new food</button>
      <FoodForm isShown={this.state.addFood} passedDownAddFood={oneFood => this.addNewFood(oneFood)} />
        {this.state.allFoods.map((oneFood, index) => {
          return <FoodBox key={index} {...oneFood}/>
        })} 
      </div>
    );
  }
}

export default App;
