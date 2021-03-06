import React, { Component } from 'react';
import "./FoodBox.css";

class FoodBox extends Component {
    state = {};

    onChangeHandler = event => {
        const { name, value } = event.target;
        this.setState(
          { [name]: value }
        );
    };

    handleFormSubmit = event => {
        const {name, calories} = this.props;
        event.preventDefault();
        let foodTobePassed = {
            name: name, 
            calories: calories, 
            quantity: this.state.quantity}
        this.props.passedDownAddFoodToList(foodTobePassed);
    };

    render() {
        return (
        <div className="box">
            <form onSubmit={event => this.handleFormSubmit(event)}>
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.image} alt="food"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.name}</strong> <br />
                                <small>{this.props.calories} cal</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                    className="input"
                                    name="quantity"
                                    type="number"  
                                    onChange={event => this.onChangeHandler(event)}
                                />
                            </div>
                            <div className="control">
                                <button className="button is-info">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </form>
        </div>
        )
    }   
}

export default FoodBox;