
import React from 'react';

function User(props){
    return (
        <div>
            <span>{props.name}</span>
            <span>{props.age}</span>
        </div>
    )
}

export default User;
