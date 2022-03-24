import React, { memo } from 'react';

const habitAddForm = memo(props => {
    const myRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const text = myRef.current.value;
        text && props.onAdd(text);
        myRef.current.value = '';
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <input type='text' className='add-input' ref={myRef}></input>
            <button className='add-button'>Add</button>
        </form>
    );
});

export default habitAddForm;
