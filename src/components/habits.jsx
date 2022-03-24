import React, { PureComponent } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends PureComponent {

    handleIncrement = ({id}) => {
        //해당 습관 카운트증가 구현해보삼
        const newHabits = this.props.habits.map( habit => {
            if(habit.id===id) return { ...habit, count: habit.count+1,};
            else return { ...habit };
        })
        this.props.change(newHabits);
    }

    handleDecrement = ({id}) => {
        const newHabits = this.props.habits.map( habit => {
            if(habit.id===id) {
                const newCount = habit.count-1<0?0:habit.count-1;
                return { ...habit, count: newCount,};
            }
            else return { ...habit };
        })
        this.props.change(newHabits);
    }

    handleDelete = ({id}) => {
        const newHabits = this.props.habits.filter( habit => habit.id!==id );
        this.props.change(newHabits);
    }

    handleAdd = text => {
        const newHabits = [...this.props.habits, {id: Math.random(), name: text, count: 0}];
        
        console.log(newHabits);
        this.props.change(newHabits);
    }

    render() {
        return (
            <>
                <HabitAddForm onAdd={this.handleAdd} />
                <ul>
                {
                    this.props.habits.map(habit => <Habit key={habit.id} habit={habit} 
                        onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete} />)
                }
                </ul>
            </>
            
        );
    }
}

export default Habits;