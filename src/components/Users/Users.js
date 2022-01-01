
import React from 'react';

import User from './User';
import Card from '../UI/Card'

function Users(props){
    console.log('props.userList');
    console.log(props.userList);
    return(
        <Card>
            {
                props.userList.map(item =>{
                    return <User name={item.name} age={item.age} />
                })
            }
        </Card>
    )
}
export default Users;
