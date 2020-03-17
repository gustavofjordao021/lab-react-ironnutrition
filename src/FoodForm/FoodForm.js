import React from 'react';
import "./FoodForm.css";

const FoodForm = props => {
    return (
        <div>
            {/* handleFormSubmit => this is the way we called the method, can be any name */}
            <form onSubmit={event => this.handleFormSubmit(event)}>
            <label>
                ID:
                <input name='_id' type='text' value={_id} onChange={event => this.onChangeHandler(event)} />
            </label>
            <label>
                Name:
                <input name='name' type='text' value={name} onChange={event => this.onChangeHandler(event)} />
            </label>
            <label>
                Price:
                <input name='price' type='number' value={price} onChange={event => this.onChangeHandler(event)} />
            </label>
            <label>
                In Stock:
                <input name='inStock' type='checkbox' value={inStock} onChange={event => this.onChangeHandler(event)} />
            </label>
            <br />
            <button>Save</button>
            </form>
        </div>
    );
};

export default FoodForm;