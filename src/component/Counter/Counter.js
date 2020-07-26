import React from 'react';

const Counter = props => {
    let message = '';
    if(props.ringFound) {
        message = `Кольцо найдено. Игра завершена. `;
    }
    return (
        <p>
            {message}Количество попыток: {props.counter}
        </p>
    );
};

export default Counter;