import React, { Component } from 'react';

class Button extends Component {
    resetall = () => {
        const newHabits = this.props.habits.map( habit => {
            if(habit.count!==0)
                return { ...habit, count: 0 };
            else 
                return habit;
        });
        this.props.change(newHabits);
    }

    render() {
        return (
            <button className='habits-reset' onClick={this.resetall}>Reset All</button>
        );
    }
}

export default Button;