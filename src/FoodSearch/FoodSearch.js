import React, {Component} from 'react';
import "./FoodSearch.css";

const DEFAULT_STATE = {
    "name": "",
    "calories": 0,
    "image": "",
    "quantity": 0
}

class FoodSearch extends Component {
    state = {...DEFAULT_STATE};

    onChangeHandler = event => {
        const { name, value } = event.target;
        this.setState(
          { [name]: value },
          () => this.props.passedDownSearchFood(this.state)
        );
    };

    render() {
        const {name} = this.state;
        return (
            <div className="field has-addons">
                <div className="control">
                    <input className="input" name='name' type='text' value={name} placeholder="Find food" onChange={event => this.onChangeHandler(event)} />
                </div>
            </div>
        );          
    };
};

export default FoodSearch;