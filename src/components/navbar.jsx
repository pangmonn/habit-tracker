import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        const total = this.props.habits.reduce((sum,habit) => {
            return (habit.count>0?1:0)+sum;
        },0);
        return (
            <div className='navbar'>
                <i className='navbar-logo fas fa-leaf'></i>
                <span>Habit Tracker</span>
                <span className='navbar-count'>{total}</span>
            </div>
        );
    }
}

export default Navbar;