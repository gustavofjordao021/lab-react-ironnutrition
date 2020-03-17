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
        const { name, value } = event.target;
        this.setState(
          { [name]: value },
          () => console.log(this.state)
        );
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.props.passedDownAddFood(this.state);
        this.setState({...DEFAULT_STATE});
    };

    render() {
        const {name, calories, image} = this.state;
        if (this.props.isShown) {
            return (
                <div>
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
        } else {
            return (
                <div />
            )
        }
    };
};

export default FoodForm;