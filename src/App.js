import React, { Component } from 'react';
import FoodBox from './FoodBox/FoodBox';
import FoodForm from './FoodForm/FoodForm';
import FoodSearch from './FoodSearch/FoodSearch';
import Foods from './foods.json'
import 'bulma/css/bulma.css';
import './App.css';

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

  searchFood = foodSearch => {
    if (foodSearch.name !== "") {
      let lowerCaseFoodSearch = foodSearch.name.toLowerCase();
      this.setState(prevState => ({
        allFoods: prevState.allFoods.filter(el => el.name.toLowerCase().includes(lowerCaseFoodSearch))
      }));
    } else {
      this.setState({
        allFoods: [...Foods]
      })
    }
  }

  render() {
    return (
      <div className="App">
      <h1>IronNutrition</h1>
      <button onClick={() => this.addFoodForm()}>Add new food</button>
      <div className="container">
        <FoodSearch passedDownSearchFood={searchedFood => this.searchFood(searchedFood)} />
        <FoodForm isShown={this.state.addFood} passedDownAddFood={oneFood => this.addNewFood(oneFood)} />
      </div>
        {this.state.allFoods.map((oneFood, index) => {
          return <FoodBox key={index} {...oneFood}/>
        })} 
      </div>
    );
  }
}

export default App;
