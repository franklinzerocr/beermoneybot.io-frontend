import React from 'react';

const Title = ({ child1, child2 , child3}) => {
    return (
        <div>
            <h1>{child1}</h1>
            <h2>{child2}</h2>
            <p>{child3}</p>
        </div>
    );
}

export default Title;