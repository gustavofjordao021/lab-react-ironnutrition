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
    baseFoods: [
      ...Foods
    ],
    foodList: [],
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
      console.log(lowerCaseFoodSearch);
      this.setState(prevState => ({
        allFoods: prevState.baseFoods.filter(el => el.name.toLowerCase().includes(lowerCaseFoodSearch))
      }));
      console.log(this.state.allFoods)
    } else {
      this.setState({
        allFoods: [...Foods]
      })
    }
  }

  addFoodToList = (foodQuantityForList, foodNameForList, foodCaloriesForList) => {
    let foodListCopy = [];
    foodListCopy.push({
      name: foodNameForList,
      calories: foodCaloriesForList,
      quantity: foodQuantityForList
    })
    this.setState({
      foodList: foodListCopy
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
          <div className="container">
            <button onClick={() => this.addFoodForm()}>Add new food</button>
            <FoodSearch passedDownSearchFood={searchedFood => this.searchFood(searchedFood)} />
            <FoodForm isShown={this.state.addFood} passedDownAddFood={oneFood => this.addNewFood(oneFood)} />
          </div>
        <div className="container">
          <div className="list-food">
            {this.state.allFoods.map((oneFood, index) => {
              return <FoodBox key={index} {...oneFood} passedDownAddFoodToList={(oneFoodQuantity, oneFoodName, oneFoodCalories) => this.addFoodToList(oneFoodQuantity, oneFoodName, oneFoodCalories)}/>
            })}
          </div>
          <div>
            <h3>Today's foods</h3>
            {console.log(this.state.foodList)}
              <ul>
                {this.state.foodList.map((oneFood, index) => {
                  return <li key={index}>{oneFood.quantity} {oneFood.name} - {oneFood.calories * oneFood.quantity} calories</li>
                })} 
              </ul>
                {/* <p>Total: {oneFood.calories * oneFood.quantity}</p> */}
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
