import React, {useState} from 'react';

function ListItem(props) {


    const counter = props.el;
    const buttonMinusHandler = () => {
        props.counterMinus(props.ind)
    }
    const buttonPlusHandler = () => {
        props.counterPlus(props.ind)
    }
    return (
        <div>
            <button onClick={buttonMinusHandler}>-</button>
            {counter}
            <button onClick={buttonPlusHandler}>+</button>
        </div>
    );

}

export default ListItem;