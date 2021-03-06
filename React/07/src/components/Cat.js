import React from 'react';

const Cat = ({name, meow = f => f }) => {
    console.log(`rendering ${name}`);

    return (
        <p pnClick={() => meow(name)}> {name} </p>
    );
};

export default Cat;