import React, { Component } from 'react';
import "./FoodBox.css";

class FoodBox extends Component {
    state = {};

    onChangeHandler = event => {
        const { name, value } = event.target;
        this.setState(
          { [name]: value },
          () => console.log(this.state)
        );
    };

    render() {
        return (
        <div className="box">
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
                                name={this.props.quantity}
                                type="number"  
                                value="0"
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
        </div>
        )
    }   
}

export default FoodBox;