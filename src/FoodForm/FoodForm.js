import React, {Component} from 'react';
import "./FoodForm.css";

const DEFAULT_STATE = {
    "name": "",
    "calories": 0,
    "image": "",
    "quantity": 0
}

class FoodForm extends Component {
    state = {...DEFAULT_STATE};

    onChangeHandler = event => {
        let { name, calories, image } = event.target;
    
        this.setState(
          { [name]: value },
          () => console.log(this.state)
        );
      };

    render() {
        const {name, calories, image} = this.state;
        return (
            <div>
                {/* handleFormSubmit => this is the way we called the method, can be any name */}
                <form onSubmit={event => this.handleFormSubmit(event)}>
                <label>
                    Name:
                    <input name='name' type='text' value={name} onChange={event => this.onChangeHandler(event)} />
                </label>
                <label>
                    Calories:
                    <input name='calories' type='number' value={calories} onChange={event => this.onChangeHandler(event)} />
                </label>
                <label>
                    Image:
                    <input name='image' type='text' value={image} onChange={event => this.onChangeHandler(event)} />
                </label>
                <br />
                <button>Save</button>
                </form>
            </div>
        );  
    };
};

export default FoodForm;