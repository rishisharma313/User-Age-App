
import React from 'react';

import Card from '../UI/Card';
import UserForm from './UserForm';

function NewUser(props){
    const addUserHandler = (name, age) => {
        console.log('new-user')
        console.log(name, age);
        props.onUserAdd(name, age);
    }
    
    return(
        <Card>
            <UserForm onAddUser={addUserHandler}/>
        </Card>
    )
}

export default NewUser;
